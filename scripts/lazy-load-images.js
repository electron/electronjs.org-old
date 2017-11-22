import { throttle } from 'lodash'

function inViewport (element) {
  const { top, right, bottom, left } = element.getBoundingClientRect()
  return bottom > 0
      && window.innerWidth - left > 0
      && window.innerHeight - top > 0
      && right > 0
}

module.exports = function () {
  ['scroll', 'resize', 'load'].forEach(event =>
    window.addEventListener(event, module.exports.checkInViewport)
  )

  // add all images that are part of the DOM tree
  // NB: |display: none| elements need manual adding
  document.querySelectorAll('img[data-src]').forEach(module.exports.addImage)
}

let images = []

module.exports.addImage = function (image) {
  images.push(image)
  module.exports.checkInViewport();
}

function handle (image) {
  // abort if this element has previously entered the viewport
  if (!image.dataset.src) return

  image.setAttribute('src', image.dataset.src)

  // remove attribute so CSS fade-in can happen
  image.onload = () => {
    image.removeAttribute('data-src')

    // remove colored circular placeholder element
    const placeholder = image.parentElement.querySelector('.placeholder')
    if (placeholder) placeholder.classList.add('faded-out')
  }
}

// TODO: Read/write lock on |images|?
module.exports.checkInViewport = throttle(() => {
  images = images.filter(image => {
    if (inViewport(image)) {
      handle(image)
      return false // remove from unseen photos
    }
    return true // keep in unseen photos
  })
}, 100)
