var updateDownloadLink = function () {
  var platform = uaParserJs().os
  var releaseServer = 'https://electron-api-demos.githubapp.com/updates/'
  var filenames = {
    mac: 'electron-api-demos-mac.zip',
    windows: 'ElectronAPIDemosSetup.exe' // exe auto-updates! zip does not.
  }

 if (platform.name.match(/mac/i)) platform.id = 'mac'
 if (platform.name.match(/windows/i)) platform.id = 'windows'

  // Don't be clever if platform is something other than windows or mac
  if (!platform.id) return

  var button = document.getElementById('download-latest-release')
  button.setAttribute('href', releaseServer + filenames[platform.id])
  button.textContent = 'Download for ' + platform.name

  document.getElementById('download-alternatives').style.display = 'inline-block'
}

document.addEventListener('DOMContentLoaded', updateDownloadLink)
