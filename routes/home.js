// const i18n = require('electron-i18n')
const requireYml = require('require-yml')
const path = require('path')
const locale = requireYml(path.join(__dirname, '../data/locale.yml'))
// TODO use an alternative to require-yml that behave like require (process.cwd vs __dirname)

module.exports = (req, res) => {
  const context = {
    vendoredVersions: require('../lib/vendored-versions'),
    locale: locale
  }

  res.render('home', context)
}