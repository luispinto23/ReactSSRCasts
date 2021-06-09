const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform Webpack that we're building for nodeJS and not for the browser
  target: 'node',

  //Inform webpack of the root file of the server application
  entry: './src/index.js',

  // Tell webpack where to place the output of the bundling process
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
