const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.config.js');

// When this file is called, we need to merge this webpack with the normal webpack.config file.
// Check package.json to see how this file is called in the scripts.

module.exports = merge(common, {
  devtool: 'source-map',
  //We need to select the path where the index.html lives relative to this webpack file. 
  //For now, we need to have the html file in the Javascripts folder, and this in the public.
  //We tell it what front-end port we will be operating off of for local host.
  devServer: {
    contentBase: path.join(__dirname, './javascripts'),
    compress: true,
    port: 3000
  },

  // Now, we create a plugins array. We tell it that the program will be in development
  // mode and that our back-end server is located at localhost 5000.
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'API_URI': JSON.stringify('http://localhost:5000')
      },
    }),
  ]
});