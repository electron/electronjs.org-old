// const localized = require('require-yml')('../data/locale.yml')
const {docs} = require('electron-i18n')

module.exports = (req, res) => {
  const locale = 'en'

  if (!docs[locale]) {
    return res.status(404).render('404', {message: `Invalid locale: ${locale}`})
  }

  const docsForLocale = Object.keys(docs[locale])
    .map(href => docs[locale][href])
    .sort((a, b) => (a.slug).localeCompare((b.slug)))

  const context = {
    // pageDetails: Object.assign({}, localized.pages[req.path]),
    docs: docsForLocale
  }
  res.render('docs/index', context)
}
