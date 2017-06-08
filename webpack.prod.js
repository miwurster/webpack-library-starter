const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(require('./webpack.config.js'), {
  output: {
    filename: 'library.min.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true,
      },
    }),
  ],
});
