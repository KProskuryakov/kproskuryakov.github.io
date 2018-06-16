const path = require('path');

module.exports = {
	entry: {
		lasergame: './src/lasergame/Game.ts',
		upnumbers: './src/upnumbers/upnumbers.ts'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: '[name]/bundle.js',
		path: path.resolve(__dirname)
	}
};