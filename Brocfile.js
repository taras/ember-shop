/* global require, module */

var uglifyJavaScript = require('broccoli-uglify-js');
var replace = require('broccoli-replace');
var compileES6 = require('broccoli-es6-concatenator');
var transpileES6 = require('broccoli-es6-module-transpiler');
//var concatFiles = require('broccoli-concat');
var validateES6 = require('broccoli-es6-import-validate');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var env = require('broccoli-env').getEnv();
var getEnvJSON = require('./config/environment');

var p = require('ember-cli/lib/preprocessors');
var preprocessCss = p.preprocessCss;
var preprocessTemplates = p.preprocessTemplates;
var preprocessJs = p.preprocessJs;

module.exports = function (broccoli) {

  var prefix = 'shop';
  var rootURL = '/';

  // index.html

  var indexHTML = pickFiles('app', {
    srcDir: '/',
    files: ['index.html'],
    destDir: '/'
  });

  indexHTML = replace(indexHTML, {
    files: ['index.html'],
    patterns: [{ match: /\{\{ENV\}\}/g, replacement: getEnvJSON.bind(null, env)}]
  });

  // sourceTrees, appAndDependencies for CSS and JavaScript

  var app = pickFiles('app', {
    srcDir: '/',
    destDir: prefix
  });

  app = preprocessTemplates(app);

  var config = pickFiles('config', { // Don't pick anything, just watch config folder
    srcDir: '/',
    files: [],
    destDir: '/'
  });

  var sourceTrees = [app, config, 'vendor'].concat(broccoli.bowerTrees());
  var appAndDependencies = mergeTrees(sourceTrees, { overwrite: true });

  // JavaScript

  var legacyFilesToAppend = [
    'jquery.js',
    'handlebars.js',
    'ember.js',
    'route-recognizer/dist/route-recognizer.amd.js',
    'ic-ajax/dist/named-amd/main.js',
    'ember-data.js',
    'ember-resolver.js',
    'ember-shim.js',
    'modernizr.js',
    'foundation.js',
    'foundation-shim.js'
  ];

  var applicationJs = preprocessJs(appAndDependencies, '/', prefix);

  applicationJs = compileES6(applicationJs, {
    loaderFile: 'loader/loader.js',
    ignoredModules: [
      'ember/resolver',
      'ic-ajax'
    ],
    inputFiles: [
      prefix + '/**/*.js'
    ],
    legacyFilesToAppend: legacyFilesToAppend,
    wrapInEval: env !== 'production',
    outputFile: '/assets/app.js'
  });

  if (env === 'production') {
    applicationJs = uglifyJavaScript(applicationJs, {
      mangle: false,
      compress: false
    });
  }

  // Styles

  var styles = preprocessCss(appAndDependencies, prefix + '/styles', '/assets');

  // Ouput

  var outputTrees = [
    indexHTML,
    applicationJs,
    'public',
    styles
  ];

  // Testing

  if (env !== 'production') {

    var tests = pickFiles('tests', {
      srcDir: '/',
      destDir: prefix + '/tests'
    });

    var testsIndexHTML = pickFiles('tests', {
      srcDir: '/',
      files: ['index.html'],
      destDir: '/tests'
    });

    var qunitStyles = pickFiles('vendor', {
      srcDir: '/qunit/qunit',
      files: ['qunit.css'],
      destDir: '/assets/'
    });

    testsIndexHTML = replace(testsIndexHTML, {
      files: ['tests/index.html'],
      patterns: [{ match: /\{\{ENV\}\}/g, replacement: getEnvJSON.bind(null, env)}]
    });

    tests = preprocessTemplates(tests);

//    var fixtures = pickFiles('fixtures', {
//      srcDir: '/',
//      destDir: '/',
//      files: ['**/*.js']
//    });
//
//    var transpiledFixtures = transpileES6(fixtures, {moduleName: 'fixtures'});
//    var concatedFixtures = concatFiles(transpiledFixtures, {
//      inputFiles: ['**/js'],
//      outputFile: '/assets/fixtures.js'
//    });

    sourceTrees = [tests, 'vendor'].concat(broccoli.bowerTrees());
    appAndDependencies = mergeTrees(sourceTrees, { overwrite: true });

    var testsJs = preprocessJs(appAndDependencies, '/', prefix);

    var validatedJs = validateES6(mergeTrees([app, tests]), {
      whitelist: {
        'ember/resolver': ['default'],
        'ember-qunit': [
          'globalize',
          'moduleFor',
          'moduleForComponent',
          'moduleForModel',
          'test',
          'setResolver'
        ]
      }
    });

    var legacyTestFiles = [
      'qunit/qunit/qunit.js',
      'qunit-shim.js',
      'ember-qunit/dist/named-amd/main.js'
    ];

    legacyFilesToAppend = legacyFilesToAppend.concat(legacyTestFiles);

    testsJs = compileES6(testsJs, {
      // Temporary workaround for
      // https://github.com/joliss/broccoli-es6-concatenator/issues/9
      loaderFile: '_loader.js',
      ignoredModules: [
        'ember/resolver',
        'ember-qunit'
      ],
      inputFiles: [
        prefix + '/**/*.js'
      ],
      legacyFilesToAppend: legacyFilesToAppend,

      wrapInEval: true,
      outputFile: '/assets/tests.js'
    });

    var testsTrees = [qunitStyles, testsIndexHTML, validatedJs, testsJs];
    outputTrees = outputTrees.concat(testsTrees);
  }

  return mergeTrees(outputTrees, { overwrite: true });
};
