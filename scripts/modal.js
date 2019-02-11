module.exports = function installModal () {
  // Get the modal
  const modal = document.getElementById('myModal')

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0]

  // When the user types ?, open the modal
  window.addEventListener('keydown', event => {
    if (event.key === '?') {
      if (event.target === null || event.target.tagName !== 'INPUT') {
        modal.style.display = 'block'
        event.stopImmediatePropagation()
        event.preventDefault()
      }
    }

    if (event.keyCode === 27) {
      modal.style.display = 'none'
    }
  }, true)

  // When the user clicks on <span> (x), close the modal
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', (ev) => {
    if (ev.target === modal) {
      modal.style.display = 'none'
    }
  }, true)

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', () => {
    modal.style.display = 'none'
  }, true)
}
