// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoader = {
	loader: 'css-loader',
	options: {
		sourceMap: true,
	},
};

const resolveUrlLoader = {
	loader: 'resolve-url-loader',
	options: {
		sourceMap: true,
		fail: true,
	},
};

const sassLoader = {
	loader: 'sass-loader',
	options: {
		outputStyle: 'expanded',
		sourceMap: true,
		sourceMapContents: true,
	},
};

const scssLoader = [cssLoader, resolveUrlLoader, sassLoader];

module.exports = {
	plugins: [
		// your custom plugins
		new ExtractTextPlugin({
			filename: '[name].[hash].css',
			allChunks: true,
		}),
	],
	module: {
		rules: [
			// add your custom rules.
			{
				test: /\.png$|.jpg$|.svg$|.jpeg$|.gif$/,
				loader: 'file-loader',
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: cssLoader,
				}),
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: scssLoader,
					publicPath: '/',
				}),
			},
			{ test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
		],
	},
};
