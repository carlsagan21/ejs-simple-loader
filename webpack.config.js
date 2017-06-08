var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
process.traceDeprecation = true

module.exports = {
  entry: './test/index.js',
  output: {
    filename: 'bundle.js',
  },
	module: {
    // configuration regarding modules
    // rules: [
		// 	{
		// 		test: /\.ejs?$/,
		// 		use: [
		// 			"html-loader",
    //       {
    //         loader: "./lib/index.js",
    //         options: {
    //           locale: 'a'
    //         }
    //       }
		// 		]
		// 		// loader: 'html-loader!./lib/index.js',
		// 		// options: {
		// 		// 	locale: 'a'
		// 		// }
		// 	}
		// ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'index',
			filename: 'index' + '.html',
			template: './lib/index.js?title=' + 'index' + '&distPath=' + 'd' + '&locale=' + 'en' + '!test/templates/' + 'index' + '.ejs',
			distPath: 'd',
		})
	]
};
