const i18n = require('../lib/i18n')
const vendoredVersions = require('../data/versions.json')
  .find(version => version.version === i18n.electronLatestStableVersion)

// Supply all route handlers with a baseline `req.context` object
module.exports = function contextBuilder (req, res, next) {
  req.i18n = i18n
  req.context = {
    electronLatestStableVersion: i18n.electronLatestStableVersion,
    electronLatestStableTag: i18n.electronLatestStableTag,
    vendoredVersions: vendoredVersions,
    currentLocale: req.language,
    locales: i18n.locales,
    page: i18n.website[req.language].pages[req.path],
    localized: i18n.website[req.language],
    cookies: req.cookies
  }

  if (req.path.startsWith('/docs')) {
    req.context.docs = i18n.docs[req.language]
  }

  return next()
}
