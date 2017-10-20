const {getPlatformFromUserAgent, getPlatformLabel} = require('platform-utils')

module.exports = function updateAppDownloadLinks () {
  const appDownloadLinks = Array.from(document.querySelectorAll('a.app-download'))
  if (!appDownloadLinks.length) return

  const platform = getPlatformFromUserAgent()

  const platformMatches = appDownloadLinks.filter(link => {
    return link.classList.contains(platform)
  })

  console.log(platformMatches)
  if (platformMatches.length == 1) {
    appDownloadLinks.forEach(link => link.style.display = 'none')
    platformMatches[0].style.display = 'inline-block'
    document.querySelector('#view-all-downloads').style.display = 'inline-block'
  }
}
