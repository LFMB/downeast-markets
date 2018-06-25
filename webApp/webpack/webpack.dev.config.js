const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry: [
		path.join(__dirname, '../index.js')
	],
	output: {
	    path: __dirname + '/dist',
    	filename: 'index_bundle.js'	
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		],
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Test App',
			})
		]
	},
}