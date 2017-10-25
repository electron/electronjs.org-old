const i18n = require('../../lib/i18n')

module.exports = (req, res) => {
  const doc = i18n.docs[req.language][req.path]
  if (!doc) return res.status(404).render('404')

  const context = Object.assign(req.context, {
    doc: doc,
    page: {
      title: `${doc.title} | Electron`,
      description: doc.description
    },
    layout: 'docs'
  })

  res.render('docs/show', context)
}
