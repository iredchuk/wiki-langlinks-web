const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.HotModuleReplacementPlugin()
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

	devtool: 'cheap-eval-source-map',

	devServer: {
		filename: 'bundle.js',
		contentBase: path.join(__dirname, 'dist'),
		port: 8080
	}
};
