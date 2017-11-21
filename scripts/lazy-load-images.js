const inView = require('in-view')

module.exports = function () {
  inView('img[data-src]')
    .on('enter', img => {
      // abort if this element has previously entered the viewport
      if (!img.dataset.src) return

      img.setAttribute('src', img.dataset.src)

      // remove attribute so CSS fade-in can happen
      img.onload = () => {
        img.removeAttribute('data-src')
        
        // remove colored circular placeholder element
        const placeholder = img.parentElement.querySelector('.placeholder')
        if (placeholder) placeholder.classList.add('faded-out')
      }
    })
}