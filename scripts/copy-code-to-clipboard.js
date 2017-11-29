const Clipboard = require('clipboard')

new Clipboard('.btn-clipboard') // eslint-disable-line

module.exports = function copyCodeToClipBoard () {
  document.querySelectorAll(`code.hljs`).forEach(code => {
    let id = `_${Math.random().toString(36).substr(3)}`
    code.id = id
    let copyButton = document.createElement('button')
    copyButton.classList.add('btn-clipboard', 'simptip-position-top')
    copyButton.setAttribute('data-tooltip', 'Copy to clipboard')
    copyButton.setAttribute('data-clipboard-target', `#${id}`)
    copyButton.innerHTML = 'Copy'
    code.parentElement.appendChild(copyButton)
  })
  document.querySelectorAll('.btn-clipboard').forEach(button => {
    button.addEventListener('click', function (e) {
      e.target.setAttribute('data-tooltip', 'Copied')
    })
  })
  document.querySelectorAll('.btn-clipboard').forEach(button => {
    button.addEventListener('mouseout', function (e) {
      e.target.setAttribute('data-tooltip', 'Copy to clipboard')
    })
  })
}
