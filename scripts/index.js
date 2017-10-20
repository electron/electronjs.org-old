const fixPlatformLabels = require('./fix-platform-labels')
const updateDownloadLink = require('./update-download-link')

document.addEventListener('DOMContentLoaded', () => {
  fixPlatformLabels()
  updateDownloadLink()
})
