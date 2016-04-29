var updateDownloadLink = function () {
  var platform = uaParserJs().os
  var releaseServer = 'https://electron-api-demos.githubapp.com/updates/'
  var filenames = {
    mac: 'electron-api-demos-mac.zip',
    windows: 'ElectronAPIDemosSetup.exe', // exe auto-updates! zip does not.
    linux: 'electron-api-demos-linux.zip'
  }

  if (platform.name.match(/mac/i)) platform.id = 'mac'
  if (platform.name.match(/windows/i)) platform.id = 'windows'
  if (platform.name.match(/ubuntu/i)) platform.id = 'linux'

  if (!platform.id) return

  document.querySelector('#download-latest-release')
    .setAttribute('href', releaseServer + filenames[platform.id])

  document.querySelector('#download-latest-release .label')
    .textContent = 'Download for ' + platform.name

  document.querySelector('#download-alternatives')
    .style.display = 'inline-block'
}

document.addEventListener('DOMContentLoaded', updateDownloadLink)
