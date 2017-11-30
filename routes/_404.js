const i18n = require('lib/i18n')

module.exports = (req, res) => {
  req.context.page.title = `${i18n.website[req.language]._404.page_not_found} | Electron`
  res.render('404', req.context)
}
