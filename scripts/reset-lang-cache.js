module.exports = () => {
  const links = document.querySelectorAll('[href^="/languages/"]')
  for (const link of links) {
    link.addEventListener('click', (e) => {
      if (window.caches) {
        e.preventDefault()

        window.caches.keys()
          .then((keys) => {
            for (const key of keys) {
              window.caches.delete(key)
            }
            window.location = link.getAttribute('href')
          })
      }
    })
  }
}
