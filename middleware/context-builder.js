const i18n = require('lib/i18n')
const releases = require('electron-releases')
const { deps } = releases.find(release => release.version === i18n.electronLatestStableVersion)
const { getLanguageNativeName } = require('locale-code')
const rtlDetect = require('rtl-detect')

function hasNpmDistTag (tag) {
  return function (release) {
    if (release.npm_dist_tags) {
      return release.npm_dist_tags.includes(tag)
    } else {
      return false
    }
  }
}

// Supply all route handlers with a baseline `req.context` object
module.exports = function contextBuilder (req, res, next) {
  // Attach i18n object to request so any route handler can use it if needed
  req.i18n = i18n

  // This allows the language to be set per-request using a query param, so
  // folks can share a link like /docs/api/app?lang=fr-FR and know that
  // the recipient will see the doc in that language, regardless of their
  // language settings. If no query param is set, fall back to the default
  // language (or the one set in the cookie)
  if (req.query.lang) {
    req.language = req.query.lang
  }

  // If request language does not exist, fall back to English
  // e.g. /?lang=Foo
  if (!i18n.website[req.language]) req.language = 'en-US'

  const localized = i18n.website[req.language]

  const stableRelease = releases.find(hasNpmDistTag('latest'))
  const betaRelease = releases.find(hasNpmDistTag('beta'))
  const nightlyRelease = releases.find(hasNpmDistTag('nightly'))

  // Page titles, descriptions, etc
  let page = Object.assign({
    title: 'Electron',
    path: req.path
  }, i18n.website[req.language].pages[req.path])

  if (req.path !== '/') {
    page.title = `${page.title} | Electron`
  }

  req.context = {
    electronLatestStableVersion: i18n.electronLatestStableVersion,
    electronLatestStableTag: i18n.electronLatestStableTag,
    electronMasterBranchCommit: i18n.electronMasterBranchCommit,
    electronMasterBranchCommitShort: i18n.electronMasterBranchCommit.slice(0, 6),
    deps: deps,
    currentLocale: req.language,
    currentLocaleNativeName: getLanguageNativeName(req.language),
    languageDirection: rtlDetect.getLangDir(req.language),
    locales: i18n.locales,
    page: page,
    localized: localized,
    cookies: req.cookies,
    stableRelease,
    betaRelease,
    nightlyRelease
  }

  if (req.path.startsWith('/docs')) {
    req.context.docs = i18n.docs[req.language]
  }

  return next()
}
