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
    button.setAttribute('data-tooltip', 'Copy to clipboard')
    button.setAttribute('data-clipboard-target', `#${id}`)
    button.innerHTML = 'Copy'
    code.parentElement.appendChild(button)
  })

  document.querySelectorAll('.btn-clipboard').forEach(button => {
    button.addEventListener('click', function (e) {
      e.target.setAttribute('data-tooltip', 'Copied')
    })
    button.addEventListener('mouseout', function (e) {
      e.target.setAttribute('data-tooltip', 'Copy to clipboard')
      e.target.blur()
    })
  })
}