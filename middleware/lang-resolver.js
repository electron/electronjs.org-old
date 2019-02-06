const i18n = require('electron-i18n')
const url = require('url')

const locales = Object.keys(i18n.locales)

var lowerLangRegion = {}
var lowerLang = {}
// Keep all the language/region and language in a object
// with property names in lowercases to resolve the lang code
locales.forEach(locale => {
  // map locale in lowercase
  lowerLangRegion[locale.toLowerCase()] = locale

  const lang = locale.split('-').shift().toLowerCase()
  // The first lang for each locale is the default one
  // to resolve when the region is missing
  if (!lowerLang.hasOwnProperty(lang)) {
    lowerLang[lang] = locale
  }
})

function resolve (lang) {
  var lower = lang.toLowerCase()
  if (lowerLangRegion.hasOwnProperty(lower)) {
    return lowerLangRegion[lower]
  }

  lower = lang.split('-').shift().toLowerCase()
  if (lowerLang.hasOwnProperty(lower)) {
    return lowerLang[lower]
  }

  return lang
}

function parseurl (req) {
  return url.parse(req.url)
}

module.exports = function langResolver (req, res, next) {
  if (req.query.lang) {
    // resolving lang to lang-REGION when
    //    - cases does not match
    //    - region is missing
    const rlang = resolve(req.query.lang)

    // redirect only when the resolved lang exists and it is different
    if (rlang && rlang !== req.query.lang) {
      const parsedUrl = parseurl(req)
      req.query.lang = rlang
      return res.redirect(
        url.format({ pathname: parsedUrl.pathname, query: req.query }))
    }
  }

  return next()
}
