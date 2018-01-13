var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// An array with all the dependency names
const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 
  'faker', 'react-dom', 'react-input-range', 
  'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  // Modules/Loaders - Working with Individual Files
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  // Plugins - Looking at the total sum of input/output
  plugins: [
    // Looks for any overlapping code in Vendor and Bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    // Automatically places the bundle script tags within our index.html file
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
