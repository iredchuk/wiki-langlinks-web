module.exports = env => require(`./webpack.${env || 'dev'}.js`)
