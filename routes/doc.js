// const localized = require('require-yml')('../data/locale.yml')
const i18n = require('electron-i18n')

module.exports = (req, res) => {
  const locale = 'en'
  const href = req.path

  if (!i18n[locale]) {
    return res.status(404).render('404', {message: `Invalid locale: ${locale}`})
  }

  const doc = i18n[locale][href]

  if (!doc) {
    return res.status(404).render('404', {message: `Document not found`})
  }

  const context = {
    // pageDetails: Object.assign({}, localized.pages[req.path]),
    doc: doc,
    title: doc.title,
    layout: 'docs'
  }
  res.render('docs/show', context)
}
