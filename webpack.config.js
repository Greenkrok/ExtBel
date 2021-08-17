// Libraries
const path = require('path');
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Configuration
module.exports = {
  entry: './src/scripts/main.js',
  module: {
    rules: [
      { test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ] },

      { test: /\.(js)$/,
        use: 'babel-loader' },
        
      { test: /.(s*)css$/,
        use: [ miniCss.loader, 'css-loader?url=false', 'sass-loader' ] },

      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },

  optimization: {
		minimizer: [
			new minify({})
		],
	},
  
  plugins: [
    new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, 'src/img'),
            to:   path.resolve(__dirname, 'dist/img')
          }
        ]
      }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new miniCss({
			filename: 'style.css',
		}),

    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.$": "jquery",
        "window.jQuery": "jquery"
    }),
  ],

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
