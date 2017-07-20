const path = require('path')

const commonConfig = {
  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: 'transform-runtime',
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
}

module.exports = env => {
  const envConfig = require(`./webpack.${env || 'dev'}.js`)
  return Object.assign(commonConfig, envConfig)
}
