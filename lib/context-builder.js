const i18n = require('electron-i18n')

module.exports = function contextBuilder (req, res, next) {
  req.i18n = i18n
  
  let context = {
    pageDetails: i18n.website.pages[req.path]
  }

  if (req.path.startsWith('/docs')) {
    context.docs = Object.keys(i18n.docs[req.language])
    .map(href => i18n.docs[req.language][href])
    .sort((a, b) => (a.slug).localeCompare((b.slug)))
  }

  req.context = Object.assign({}, context)

  return next()
}