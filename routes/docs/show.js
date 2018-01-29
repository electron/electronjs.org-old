const i18n = require('../../lib/i18n')

module.exports = (req, res, next) => {
  const doc = i18n.docs[req.language][req.path]
  if (!doc) return next()

  const context = Object.assign(req.context, {
    doc: doc,
    docEn: i18n.docs['en-US'][req.path],
    page: {
      title: `${doc.title} | Electron`,
      description: doc.description,
      url: req.url
    },
    layout: 'docs'
  })

  res.render('docs/show', context)
}
