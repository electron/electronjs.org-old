const env = require('lil-env-thing')
const path = require('path')

module.exports = function browsersync () {
  // disable it for now
  return noop

  if (env.test || env.production) return noop

  const bs = require('browser-sync')({
    port: 3030,
    files: path.join(__dirname, '../**/*'),
    logSnippet: false
  })
  return require('connect-browser-sync')(bs)
}

function noop (req, res, next) {
  return next()
}
