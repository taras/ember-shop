module.exports = function(environment) {
  var ENV = {
    rootURL: '/',
    FEATURES: {
       'query-params-new': true
    }
  };

  if (environment === 'development') {

  }

  if (environment === 'production') {

  }

  return JSON.stringify(ENV); // Set in index.html
};
