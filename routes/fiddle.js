/* eslint-disable prettier/prettier */
const { getLatestFiddleVersion } = require('../lib/fiddle')

module.exports = async (req, res) => {
  getLatestFiddleVersion()
    .then((latestFiddleVersion) => {
      // We'll guess the right operating system using the user's
      // user agent. If that fails, users can always click on a
      // little link that'll reload the page with a query param,
      // overriding our guess.
      const ua = req.useragent
      const hasQuery = !!req.query.windows || !!req.query.mac || !!req.query.linux
      const showWindowsDownload = (ua.isWindows && !hasQuery) || !!req.query.windows
      const showMacDownload = (ua.isMac && !hasQuery) || !!req.query.mac
      const showLinuxDownload = (ua.isLinux && !hasQuery) || !!req.query.linux

      const context = Object.assign(req.context, {
        latestFiddleVersion,
        showWindowsDownload,
        showMacDownload,
        showLinuxDownload,
      })

      res.render('fiddle', context)
    })
    .catch((error) => {
      console.warn(`Failed to get latest Fiddle version`, { error })

      res.render('fiddle', req.context)
    })
}
