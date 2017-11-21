const inView = require('in-view')

module.exports = function () {
  inView('img[data-src]')
    .on('enter', el => {
      el.setAttribute('src', el.dataset.src)
    })
    .on('exit', el => {
      // nothin'
    })
}