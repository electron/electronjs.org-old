$ = jquery

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

  $('#download-latest-release')
    .attr('href', releaseServer + filenames[platform.id])
    .find('.label')
    .text('Download for ' + platform.name)

  $('#download-alternatives').show()
}

$(updateDownloadLink)
