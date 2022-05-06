module.exports = function languageTooltip() {
  function measureAndSetHeight(el) {
    const height = langHeaderMenu.scrollHeight
    el.style.height = `${height}px`
  }

  const langHeaderMenu = document.getElementById('languages-header-menu')
  const languageButton = document.querySelector(
    '.site-header-nav .lang-select-button'
  )
  const toggleHeaderMenu = () => {
    langHeaderMenu.classList.toggle('collapsed')
    if (langHeaderMenu.classList.contains('collapsed')) {
      // hiding the menu
      langHeaderMenu.style.height = '0px'
      langHeaderMenu.style.visibility = 'hidden'
      languageButton.setAttribute('aria-expanded', false)
    } else {
      langHeaderMenu.style.visibility = 'visible'
      measureAndSetHeight(langHeaderMenu)
      languageButton.setAttribute('aria-expanded', true)
      langHeaderMenu.focus()
    }
  }

  window.addEventListener('resize', function () {
    if (!langHeaderMenu.classList.contains('collapsed')) {
      measureAndSetHeight(langHeaderMenu)
    }
  })

  if (languageButton) {
    languageButton.addEventListener('click', (evt) => {
      if (!evt.ctrlKey && !evt.metaKey) {
        evt.preventDefault()
        toggleHeaderMenu()
      }
    })
  }
}
