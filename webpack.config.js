const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader', options: { limit: 8192 }}, 
    ],
  },

  devServer: {
    open: true,               // open a page by default
    historyApiFallback: true  // ensure that directly accessing a url or refreshing the browser works
  },

  plugins: [HtmlWebpackPluginConfig]
}