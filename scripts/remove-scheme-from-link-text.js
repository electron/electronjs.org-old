const schemeless = require('schemeless')

module.exports = function () {
  document.querySelectorAll('a[href^=http]').forEach(function (a) {
    if (a.textContent.startsWith('http')) a.textContent = schemeless(a.textContent)
  })
}
