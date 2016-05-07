var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: process.env.NODE_ENV === 'production' ? [ './src/index' ] :
      [
          'webpack-dev-server/client?http://localhost:3000',
          'webpack/hot/only-dev-server',
          './src/index'
      ]
   ,
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
