const i18n = require('./i18n')

// Supply all route handlers with a baseline `req.context` object
module.exports = function contextBuilder (req, res, next) {
  req.i18n = i18n
  req.context = {
    electronLatestStableVersion: i18n.electronLatestStableVersion,
    electronLatestStableTag: i18n.electronLatestStableTag,
    vendoredVersions: require('../lib/vendored-versions'),
    currentLocale: req.language,
    locales: i18n.locales,
    pageDetails: i18n.website[req.language].pages[req.path],
    localized: i18n.website[req.language],
  }

  if (req.path.startsWith('/docs')) {
    req.context.docs = i18n.docs[req.language]
  }

  return next()
}