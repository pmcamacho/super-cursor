
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: {
    site: './js/site.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      // exclude: /(node_modules)/,   // super cursor is an ES6 module
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-2']
      }
    }]
  },
  output: {
    path: './js',
    filename: '[name].min.js'
  }
},
{
  devtool: '#inline-source-map',
  entry: {
    site: './css/site.sass'
  },
  module:
  {
    loaders:
    [
      {
        test: /\.sass$/,
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
      }
    ]
  },
  output: {
    path: './css',
    filename: '[name].css'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
];
