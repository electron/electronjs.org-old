const { throttle } = require('lodash')

function inViewport (element) {
  const { top, right, bottom, left } = element.getBoundingClientRect()
  return bottom > 0 &&
      window.innerWidth - left > 0 &&
      window.innerHeight - top > 0 &&
      right > 0
}

module.exports = function () {
  ['scroll', 'resize', 'load'].forEach(event =>
    window.addEventListener(event, updateImages)
  )

  // add all images that are part of the DOM tree
  // NB: |display: none| elements need manual adding
  document.querySelectorAll('img[data-src]').forEach(addImage)
}

let images = []

const addImage = module.exports.addImage = function (image) {
  // abort if this element has previously entered the viewport
  if (!image.dataset.src) return

  images.push(image)
  updateImages()
}

function loadImage (image) {
  // abort if this element has entered the viewport after added to the list
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

const updateImages = module.exports.updateImages = throttle(() => {
  images = images.filter(image => {
    if (inViewport(image)) {
      loadImage(image)
      return false // remove from unseen photos
    }
    return true // keep in unseen photos
  })
}, 100)
