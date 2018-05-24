// inspiration: https://github.com/luisfarzati/express-babelify-middleware

const browserify = require('browserify-middleware')
const babelify = require('babelify')
const brfs = require('brfs')

function babelifyMiddleware (entries, brOptions, baOptions) {
  brOptions = brOptions || {}
  brOptions.transform = brOptions.transform || []
  baOptions = baOptions || {}
  baOptions.presets = baOptions.presets || ['babel-preset-env']
  brOptions.transform.unshift(babelify.configure(baOptions))
  brOptions.transform.unshift(brfs)

  return browserify(entries, brOptions)
}

babelifyMiddleware.browserifySettings = browserify.settings

module.exports = babelifyMiddleware
