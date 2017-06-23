const path = require('path')
const env = require('lil-env-thing')
const sass = require('node-sass-middleware')

module.exports = function () {
  return sass({
    src: path.join(__dirname, '../_sass'),
    dest: path.join(__dirname, '../css'),
    debug: (!env.test && !env.production),
    // outputStyle: 'compressed',
    prefix: '/css'
  })
}
