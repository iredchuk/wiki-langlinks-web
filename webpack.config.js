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
            presets: [
              ['env', {
                targets: {
                  browsers: [
                    'last 2 Firefox versions',
                    'last 2 Chrome versions',
                    'last 2 iOS versions'
                  ]
                },
                modules: false
              }],
              'react'
            ]
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
