var fixtures = require('./fixtures');

module.exports = function(environment) {
  var ENV = {
    rootURL: '/',
    FEATURES: {
       'query-params-new': true
    }
  };

  if (environment === 'development') {
    ENV['FIXTURES'] = fixtures;
  }

  if (environment === 'production') {

  }

  return JSON.stringify(ENV); // Set in index.html
};
