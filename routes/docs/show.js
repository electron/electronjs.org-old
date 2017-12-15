const i18n = require('../../lib/i18n')
const semver = require('semver')
const historian = require('electron-api-historian')

module.exports = (req, res, next) => {
  const doc = i18n.docs[req.language][req.path]
  if (!doc) return next()

  const context = Object.assign(req.context, {
    doc: doc,
    page: {
      title: `${doc.title} | Electron`,
      description: doc.description,
      url: req.url
    },
    layout: 'docs'
  })

  // Renders a version history for the given doc
  // e.g. /docs/api/app?history
  if ('history' in req.query) {
    // find releases that include the current doc
    const filenameKey = context.doc.href.replace(/^\//, '') + '.md'
    context.doc.birthTag = historian[filenameKey]
    context.releasesIncludingCurrentDoc = context.releases.filter(release => {
      return semver.gte(release.version, context.doc.birthTag.replace('v', ''))
    })
    context.viewingDocHistory = true
    context.page.title = `${doc.title} Version History | Electron`
    console.log(context.doc)
    return res.render('docs/history', context)
  }

  res.render('docs/show', context)
}
