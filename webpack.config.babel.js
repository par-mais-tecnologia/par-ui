import path from 'path'

import { isProd, WDS_PORT } from './config/config'

export default {
  entry: [
    './src'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/build/`,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT
  }
}
