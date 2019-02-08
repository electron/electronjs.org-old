const browserify = require('browserify-middleware')
const browserifyOptions = require('./browserify-opts')

function babelifyMiddleware (entry) {
  return browserifyOptions(browserify)(entry)
}

module.exports = babelifyMiddleware
