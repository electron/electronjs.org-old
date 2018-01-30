module.exports = function() {
  if (document.querySelectorAll('.docs div.sub-section:not([data-lang="en-US"])').length > 0) {
    const sections = Array.from(document.querySelectorAll('.docs div.sub-section'))
    sections.forEach(sec => {
      sec.addEventListener('click', (e) => {
        const selector = 'div.sub-section'
        let el = e.target
        while (el) {
          if (el.matches(selector)) break
          el = el.parentElement;
        }
        const otherEl = document.querySelector(`[data-name=${el.dataset.name}].hidden`)
        if (otherEl) {
          otherEl.classList.remove("hidden")
          el.classList.add('hidden')
        }
      }, false)
    })
  }
}