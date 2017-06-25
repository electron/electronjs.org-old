const path = require('path')
const sass = require('node-sass-middleware')

module.exports = function () {
  return sass({
    src: path.join(__dirname, '../sass'),
    dest: path.join(__dirname, '../css'),
    debug: false,
    // outputStyle: 'compressed',
    prefix: '/css'
  })
}
