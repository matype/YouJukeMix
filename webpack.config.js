const path = require('path');

const webpack = require('webpack');

const APP_ROOT = __dirname;

const plugins = [];

plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  })
)

module.exports = {
  context: APP_ROOT,
  devServer: {
    contentBase: 'docs',
  },
  entry: {
    index: './src/js/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2015',
              ],
              plugins: [
                ['transform-react-jsx', {
                  pragma: 'h'
                }]
              ],
            },
          },
        ],
      }
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(APP_ROOT, 'docs/dist'),
    publicPath: '/dist/',
  },
  plugins,
};
