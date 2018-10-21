const EXPANDED_CLASS = ['expanded-version']
const SHRUNK_CLASS = ['shrunk-version']

module.exports = () => {
  const versions = document.querySelectorAll('.electron-version')

  const reset = () => {
    for (const version of versions) {
      version.classList.remove(...EXPANDED_CLASS)
      version.classList.remove(...SHRUNK_CLASS)
    }
  }
  const expand = (target) => {
    reset()
    for (const version of versions) {
      version.classList.add(...SHRUNK_CLASS)
    }
    target.classList.remove(...SHRUNK_CLASS)
    target.classList.add(...EXPANDED_CLASS)
  }

  for (const version of versions) {
    version.addEventListener('mouseover', expand.bind(null, version))
    version.addEventListener('mouseout', reset)
  }
}
