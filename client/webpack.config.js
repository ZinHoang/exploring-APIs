const path = require('path')

// For .env file
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js',
  },
  mode: 'development',

  //For .env file
  plugins: [
    new Dotenv({
      path: path.join(__dirname, '../.env'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../server/public'),
  },
}
