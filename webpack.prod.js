const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin(),
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  devtool: 'source-map'
}
