const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, comments: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  devtool: 'source-map'
}
