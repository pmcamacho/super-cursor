
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var autoprefixer = require('autoprefixer');

// var debug = process.env.NODE_ENV !== "production";
var debug = true;

module.exports = [{
	entry: {
		site: "./js/site.js"
	},
	module:
	{
		loaders:
		[
			{
				test: /\.js?$/,
				// exclude: /(node_modules)/,
				loader: 'babel-loader',
				query:
				{
          presets: ['es2015', 'stage-2']
				}
			}
		]
	},
	output:
	{
		path: __dirname + "/js",
		filename: "[name].min.js"
	},
},
{
  devtool: debug ? "#inline-source-map" : "#hidden-source-map",
  entry: {
    site: "./css/site.sass"
  },
  module:
  {
    loaders:
    [
      {
        test: /\.sass$/,
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      },
    ]
  },
  postcss: [ autoprefixer({ browsers: [] }) ],
  output:
  {
    path: './css',
    filename: "[name].css"
  },
  plugins: debug ?
  [
    new ExtractTextPlugin("[name].css")
  ] :
  [
    new ExtractTextPlugin("[name].css"),
		new webpack.optimize.UglifyJsPlugin({minimize: true, mangle: false, sourceMap: false})
  ]
},
];
