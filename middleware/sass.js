const path = require('path')
const sass = require('node-sass-middleware')

module.exports = function () {
  return sass({
    src: path.join(__dirname, '../styles'),
    response: true,
    debug: false,
    includePaths: path.join(__dirname, '../node_modules'),
    // outputStyle: 'compressed',
    prefix: '/styles'
  })
}
