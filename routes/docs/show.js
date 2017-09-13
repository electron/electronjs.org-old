const i18n = require('electron-i18n')

module.exports = (req, res) => {
  const doc = i18n.docs[req.language][req.path]

  if (!doc) return res.status(404).render('404')

  const context = {
    // pageDetails: Object.assign({}, localized.pages[req.path]),
    doc: doc,
    title: doc.title,
    layout: 'docs'
  }
  res.render('docs/show', context)
}
