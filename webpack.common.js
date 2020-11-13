const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const env = process.env.NODE_ENV

module.exports = {
  entry: { index: './scripts/index.js' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'precompiled', 'scripts'),
    publicPath: '/scripts/',
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
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./public/styles', './node_modules'],
              },
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/@primer/css/fonts',
          to: 'fonts',
        },
        {
          from: 'public/styles/octicons',
          to: 'octicons/octicons',
        },
        {
          from: 'public/styles/vendor/devicon/fonts',
          to: 'fonts',
        },
      ],
    }),
  ],

  devtool: env === 'production' ? 'inline-source-map' : 'source-map',

  mode: env === 'production' ? 'production' : 'development',
}
