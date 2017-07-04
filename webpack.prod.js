const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',

	plugins: [
		new webpack.LoaderOptionsPlugin(),
		new webpack.optimize.UglifyJsPlugin({ sourceMap: true, comments: false }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],

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
	},

	devtool: 'source-map'
};
