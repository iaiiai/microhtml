const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    path: path.resolve(__dirname, './src/index.js')
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "microhtml.js",
    library: "microhtml",
    libraryTarget: "umd",
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'src/static/index.html')
      }),
    new CleanWebpackPlugin(),
    new ESLintPlugin()
  ],

  target: 'node',

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },

  mode: 'development'
};
