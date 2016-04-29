var updateDownloadLink = function () {
  var platform = uaParserJs().os.name
  var releaseServer = 'https://electron-api-demos.githubapp.com/updates/'
  var assetName
  var osLabel

  if (platform.match(/mac/i)) {
    assetName = 'electron-api-demos-mac.zip'
    osLabel = 'Mac'
  } else if (platform.match(/windows/i)) {
    assetName = 'ElectronAPIDemosSetup.exe'
    osLabel = 'Windows'
  } else if (platform.match(/ubuntu|linux/i)) {
    assetName = 'electron-api-demos-linux.zip'
    osLabel = 'Linux'
  } else {
    return
  }

  document.querySelector('#download-latest-release')
    .setAttribute('href', releaseServer + assetName)

  document.querySelector('#download-latest-release .label')
    .textContent = 'Download for ' + osLabel

  document.querySelector('#download-alternatives')
    .style.display = 'inline-block'
}

document.addEventListener('DOMContentLoaded', updateDownloadLink)
