module.exports = function installToggle () {
  /**
   * @param {HTMLButtonElement} el
   */
  function initializeToggler (el) {
    el.addEventListener('click', () => {
      const targetAttrib = el.getAttribute('data-toggle-target')
      const targets = document.querySelectorAll(targetAttrib)
      targets.forEach((target) => {
        target.classList.toggle('d-none')
      })
    })
  }

  const togglers = document.querySelectorAll('[data-toggle-target]')
  togglers.forEach(initializeToggler)
}
