document.addEventListener('DOMContentLoaded', function () {
  NodeList.prototype.forEach = Array.prototype.forEach
  document.querySelectorAll('a.packageToggler').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault()
      document
        .querySelector('#dependencies-' + event.target.dataset.package)
        .classList.toggle('expanded')
    })
  })
})
