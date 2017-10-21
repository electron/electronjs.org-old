module.exports = function applyActiveClassToActiveLinks () {
  const topPath = location.pathname.split('/')[1]

  // homepage
  if (!topPath.length) return

  document.querySelectorAll(`nav a[href^="/${topPath}"]`).forEach(a => {
    a.classList.add('active')
  })
}
