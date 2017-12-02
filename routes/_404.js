module.exports = (req, res) => {
  req.context.page.title = `${req.context.localized._404.page_not_found} | Electron`
  res.status(404).render('404', req.context)
}
