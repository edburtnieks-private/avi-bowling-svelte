const webpack = require('@cypress/webpack-preprocessor');
const percyHealthCheck = require("@percy/cypress/task");

module.exports = on => {
  const options = {
    // eslint-disable-next-line global-require
    webpackOptions: require('../../webpack.config.js')
  };

  on('file:preprocessor', webpack(options));
  on("task", percyHealthCheck);
};
