// const localized = require('require-yml')('../data/locale.yml')
const i18n = require('electron-i18n')

module.exports = (req, res) => {
  const locale = 'en'

  if (!i18n[locale]) {
    return res.status(404).render('404', {message: `Invalid locale: ${locale}`})
  }

  const docs = Object.keys(i18n[locale])
    .map(href => i18n[locale][href])
    .sort((a, b) => (a.slug).localeCompare((b.slug)))

  const context = {
    // pageDetails: Object.assign({}, localized.pages[req.path]),
    docs: docs
  }
  res.render('docs/index', context)
}
