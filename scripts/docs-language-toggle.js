module.exports = () => {
  // don't add any listener if there isn't at least 1 non-english section
  if (document.querySelectorAll('.docs div.sub-section:not([data-lang="en-US"])').length > 0) {
    const toggles = Array.from(document.querySelectorAll('.docs .en-toggle'))
    toggles.forEach(toggle => {
      toggle.onclick = (e) => {
        let el = e.target
        while (el) { // find parent div
          if (el.matches('div.sub-section')) break
          el = el.parentElement
        }
        const otherEl = document.querySelector(`[data-name="${el.dataset.name}"].hidden`)
        if (otherEl) {
          otherEl.classList.remove('hidden')
          el.classList.add('hidden')
        }
      }
    })
  }
}
