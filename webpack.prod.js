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
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader?modules']
			}
		]
	},

	devtool: 'source-map'
};
