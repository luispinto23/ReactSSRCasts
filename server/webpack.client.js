const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  //Inform webpack of the root file of the client application
  entry: './src/client/client.js',

  // Tell webpack where to place the output of the bundling process
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(baseConfig, config);
