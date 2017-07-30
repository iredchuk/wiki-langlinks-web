const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, comments: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  devtool: 'source-map'
}
