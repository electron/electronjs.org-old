module.exports = function applyActiveClassToActiveLinks () {
  const topPath = `/${location.pathname.split('/')[1]}`

  // homepage
  if (!topPath.length) return

  document.querySelectorAll(`nav a`).forEach(a => {
    let regexCheck = new RegExp(`^${a.getAttribute('href')}/?.*?`)
    if (regexCheck.test(topPath)) {
      a.classList.add('active')
    }
  })
}
