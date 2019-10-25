// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('@cypress/webpack-preprocessor');

module.exports = on => {
  const options = {
    // eslint-disable-next-line global-require
    webpackOptions: require('../../webpack.config.js')
  };

  on('file:preprocessor', webpack(options));
};
