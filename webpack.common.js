const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const env = process.env.NODE_ENV

module.exports = {
  entry: { index: './scripts/index.js' },
  output: {
    filename: env === 'production' ? '[name].[chunkhash].min.js' : '[name].js',
    path: path.resolve(__dirname, 'precompiled', 'scripts'),
    publicPath: '/scripts/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [new WebpackManifestPlugin()],

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
