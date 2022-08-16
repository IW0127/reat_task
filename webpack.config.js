const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const mode =
  process.env.NODE_ENV == 'production' ? 'production' : 'development';
console.log(mode, __dirname);
module.exports = {
  entry: './src/index.js',
  mode: mode,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    clean: true,
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 4000,
    compress: true,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    fallback: {
      buffer: false,
    },
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
              name: 'assets/img/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
      favicon: 'public/favicon.png',
      // favicon: path.resolve(__dirname + '/public', 'favicon.png'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};
