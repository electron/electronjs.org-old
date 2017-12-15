const env = require('lil-env-thing')
const path = require('path')

module.exports = function browsersync () {
  if (env.test || env.production) return noop

  const bs = require('browser-sync')({
    port: 3030,
    files: [
      path.join(__dirname, '../**/*.md'),
      path.join(__dirname, '../**/*.html'),
      // path.join(__dirname, '../**/*.scss'),
      path.join(__dirname, '../data/**/*'),
      path.join(__dirname, '../js/**/*')
    ],
    logSnippet: false,
    logLevel: 'silent'
  })
  return require('connect-browser-sync')(bs)
}

function noop (req, res, next) {
  return next()
}
