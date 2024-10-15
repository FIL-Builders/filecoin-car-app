// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your JavaScript
  output: {
    filename: 'bundle.[contenthash].js', // Cache busting with contenthash
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean output directory on each build
  },
  mode: 'production', // Optimize for production
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
      util: require.resolve('util/'),
    },
  },
  plugins: [
    new NodePolyfillPlugin(), // Polyfill Node modules for browser use
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the HTML template from public/
      inject: 'body', // Inject the JavaScript bundle into the body
      minify: {
        collapseWhitespace: true, // Minify HTML output
        removeComments: true,
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Optimize and split chunks
    },
  },
};


