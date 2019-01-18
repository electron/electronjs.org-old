module.exports = function toggleReleasesMenu () {
  function classToggle() {
    const menu = document.querySelector('.r-resp-header')
    menu.classList.toggle('d-none')
  }

  const headerToggler = document.querySelector('.r-resp-header-toggle')
  if (!headerToggler) return

  headerToggler.addEventListener('click', classToggle)
}
