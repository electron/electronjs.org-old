const Clipboard = require('clipboard')
const clipboard = new Clipboard('.btn-clipboard')

clipboard.on('success', (e) => { 
  e.clearSelection()
})

module.exports = function copyCodeToClipBoard () {
  document.querySelectorAll(`code.hljs`).forEach(code => {
    const id = `_${Math.random().toString(36).substr(5)}`
    code.id = id
    const button = document.createElement('button')
    button.classList.add('btn-clipboard', 'simptip-position-top')
    button.setAttribute('data-tooltip', window.localized.clipboard.copy_to_clipboard)
    button.setAttribute('data-clipboard-target', `#${id}`)
    button.innerHTML = window.localized.clipboard.copy
    code.parentElement.appendChild(button)
  })

  document.querySelectorAll('.btn-clipboard').forEach(button => {
    button.addEventListener('mouseout', function (e) {
      e.target.setAttribute('data-tooltip', window.localized.clipboard.copy_to_clipboard)
      e.target.blur()
    })
    button.addEventListener('click', function (e) {
      e.target.setAttribute('data-tooltip', window.localized.clipboard.copied)
    })
  })
}