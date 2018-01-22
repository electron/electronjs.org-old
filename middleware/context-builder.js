const i18n = require('lib/i18n')
const releases = require('electron-releases')
const {deps} = releases.find(release => release.version === i18n.electronLatestStableVersion)
const {getLanguageNativeName} = require('locale-code')

// Supply all route handlers with a baseline `req.context` object
module.exports = function contextBuilder (req, res, next) {
  // Attach i18n object to request so any route handler can use it if needed
  req.i18n = i18n

  // This allows the language to be set per-request using a query param, so
  // folks can share a link like /docs/api/app?language=fr-FR and know that
  // the recipient will see the doc in that language, regardless of their
  // language settings. If no query param is set, fall back to the default 
  // language (or the one set in the cookie)
  const targetLanguage = req.query.language || req.language

  const localized = i18n.website[targetLanguage]

  // Page titles, descriptions, etc
  let page = Object.assign({
    title: 'Electron',
    path: req.path
  }, i18n.website[targetLanguage].pages[req.path])

  if (req.path !== '/') {
    page.title = `${page.title} | Electron`
  }

  req.context = {
    electronLatestStableVersion: i18n.electronLatestStableVersion,
    electronLatestStableTag: i18n.electronLatestStableTag,
    releases: releases,
    deps: deps,
    currentLocale: req.language,
    currentLocaleNativeName: getLanguageNativeName(req.language),
    locales: i18n.locales,
    page: page,
    localized: localized,
    cookies: req.cookies
  }

  if (req.path.startsWith('/docs')) {
    req.context.docs = i18n.docs[targetLanguage]
  }

  return next()
}
