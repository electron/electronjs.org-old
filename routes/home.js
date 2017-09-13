const i18n = require('electron-i18n')
// const pickLanguage = require('accept-language-parser').pick

module.exports = (req, res) => {
  const context = {
    vendoredVersions: require('../lib/vendored-versions'),
    locales: i18n.locales,
    currentLocale: req.language,
    localized: i18n.website[req.language]
  }

  console.log(req.foo)

  res.render('home', context)
}