const path = require('path')
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'cheap-eval-source-map',

  devServer: {
    filename: 'bundle.js',
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  }
}
