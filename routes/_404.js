module.exports = (req, res) => {
  req.context.page.title = '404 Not Found | Electron'
  res.status(404).render('404', req.context)
}
