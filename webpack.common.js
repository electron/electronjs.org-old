const path = require('path')

const env = process.env.NODE_ENV

module.exports = {
  entry: { index: './scripts/index.js' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'precompiled', 'scripts'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },

  devtool: env === 'production' ? 'inline-source-map' : 'source-map',

  mode: env === 'production' ? 'production' : 'development',
}
