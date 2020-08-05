const webpack = require('webpack')
const config = require('../webpack.common')
const webpackDevMiddleware = require('webpack-dev-middleware')

module.exports = () => {
  return webpackDevMiddleware(webpack(config), {
    publicPath: config.output.publicPath,
  })
}
