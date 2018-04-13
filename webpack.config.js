const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|woff|woff2|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new WebpackNotifierPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
  devtool: '#eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
