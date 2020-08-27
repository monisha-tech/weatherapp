'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const isProductionMode = EmberApp.env() === "production";

module.exports = function(defaults) {
  let config = {
    SRI: {
      enabled: false
    },
    // Add options here
    'esw-cache-fallback': {
      patterns: [
        'https://api.openweathermap.org/(.+)',
        'http://localhost:4200/sw-registration.js'
      ],
    }
  };
  if (isProductionMode) {
    config.fingerprint = {
      prepend: '/weatherapp/'
    };
  }
  let app = new EmberApp(defaults, config);

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
