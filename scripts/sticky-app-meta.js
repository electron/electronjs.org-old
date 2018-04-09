module.exports = function () {
  const appMeta = document.querySelector('.app-meta')
  if (!appMeta) return

  function setSticky () {
    if (appMeta.getBoundingClientRect().height < window.innerHeight) {
      appMeta.classList.add('sticky')
    } else {
      appMeta.classList.remove('sticky')
    }
  }
  window.addEventListener('resize', setSticky)
  setSticky()
}
