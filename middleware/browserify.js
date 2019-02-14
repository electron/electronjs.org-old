const browserify = require('browserify-middleware')
const browserifyOptions = require('./browserify-opts')

module.exports = browserifyOptions(browserify)
