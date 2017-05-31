module.exports = {
	entry: './assets/js/app.js',
	output: {
		filename: './dist/app.js'
	},
	module: {
		loaders: [
			{
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
		]
	}
}