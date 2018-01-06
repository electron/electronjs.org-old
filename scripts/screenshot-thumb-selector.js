module.exports = function () {
  const activeScreenshot = document.querySelector('.active-screenshot img')
  const thumbs = document.querySelectorAll('.app-screenshot-thumb')

  if (!activeScreenshot) return
  if (thumbs.length === 0) {
    document.querySelector('.app-screenshots').style.display = 'none'
    return
  }

  function chooseThumb(thumbSrc) {
    return function () {
      activeScreenshot.src = thumbSrc
    }
  }

  for (let i = 0; i < thumbs.length; i++) {
    const thumbImg = thumbs[i].querySelector('img')
    thumbs[i].addEventListener('click', chooseThumb(thumbImg.src))
  }

  chooseThumb(thumbs[0].querySelector('img').src)()
}