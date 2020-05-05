const ClipboardJS = require('clipboard')
const clipboard = new ClipboardJS('.btn-clipboard', {
  // strip leading console $ from copied codeblocks
  text: (trigger) => {
    const codeBlockID = trigger.getAttribute('data-clipboard-target').substr(1)
    let codeBlock = document.getElementById(codeBlockID).textContent

    return codeBlock.replace(/^\$\W*/gm, '')
  },
})

clipboard.on('success', (e) => e.clearSelection())

module.exports = function copyCodeToClipBoard() {
  document.querySelectorAll(`code.hljs`).forEach((code) => {
    const id = `_${Math.random().toString(36).substr(5)}`
    code.id = id

    // add button group to code block
    const buttonGroup = document.createElement('div')
    buttonGroup.classList.add('btn-group', 'border', 'float-left')
    code.parentElement.appendChild(buttonGroup)

    // add launch button if fiddle is specified
    if (code.dataset.fiddleUrl) {
      const launchButton = document.createElement('button')
      launchButton.classList.add(
        'btn-launch',
        'tooltipped',
        'tooltipped-n',
        'float-left'
      )
      launchButton.setAttribute(
        'aria-label',
        window.localized.fiddle_launch_button.launch_in_fiddle
      )
      launchButton.setAttribute('data-fiddle-url', code.dataset.fiddleUrl)
      launchButton.innerHTML = window.localized.fiddle_launch_button.launch
      buttonGroup.appendChild(launchButton)
    }

    // add clipboard button
    const copyButton = document.createElement('button')
    copyButton.classList.add(
      'btn-clipboard',
      'tooltipped',
      'tooltipped-n',
      'float-left'
    )
    copyButton.setAttribute(
      'aria-label',
      window.localized.clipboard.copy_to_clipboard
    )
    copyButton.setAttribute('data-clipboard-target', `#${id}`)
    copyButton.innerHTML = window.localized.clipboard.copy
    buttonGroup.appendChild(copyButton)
  })

  // launch button listeners
  document.querySelectorAll('.btn-launch').forEach((button) => {
    button.addEventListener('mouseout', (e) => {
      e.target.blur()
    })
    button.addEventListener('click', (e) => {
      window.open(
        `https://fiddle.electronjs.org/launch?target=${e.target.dataset.fiddleUrl}`
      )
    })
  })

  // clipboard button listeners
  document.querySelectorAll('.btn-clipboard').forEach((button) => {
    button.addEventListener('mouseout', (e) => {
      e.target.setAttribute(
        'aria-label',
        window.localized.clipboard.copy_to_clipboard
      )
      e.target.blur()
    })
    button.addEventListener('click', (e) => {
      e.target.setAttribute('aria-label', window.localized.clipboard.copied)
    })
  })
}
