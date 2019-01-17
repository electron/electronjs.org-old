const { escapeRegExp } = require('lodash')

module.exports = function applyActiveClassToActiveLinks () {
  const topPath = `/${location.pathname.split('/')[1]}`

  // homepage
  if (!topPath.length) return

  document.querySelectorAll(`nav a`).forEach(a => {
    const href = escapeRegExp(a.getAttribute('data-href-match') || a.getAttribute('href'))
    let regexCheck = new RegExp(`^${href}/?.*?`)
    if (regexCheck.test(topPath)) {
      a.classList.add('active')
    }
  })
}
