const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
