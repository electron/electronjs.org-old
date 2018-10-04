const { getPlatformFromUserAgent, getPlatformLabel } = require('platform-utils')

module.exports = function updateDemoAppDownloadLink () {
  if (!document.querySelector('#download-latest-release')) return
  const platform = getPlatformFromUserAgent()

  if (!platform) return

  const releaseServer = 'https://electron-api-demos.githubapp.com/updates/'
  let assetName

  if (platform === 'darwin') assetName = 'electron-api-demos-mac.zip'
  if (platform === 'win32') assetName = 'ElectronAPIDemosSetup.exe'
  if (platform === 'linux') assetName = 'electron-api-demos-linux.zip'

  document.querySelector('#download-latest-release')
    .setAttribute('href', releaseServer + assetName)

  document.querySelector('#download-latest-release .label')
    .textContent = 'Download for ' + getPlatformLabel(platform)

  document.querySelector('#download-alternatives')
    .style.display = 'inline-block'
}
