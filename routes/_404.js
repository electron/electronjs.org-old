module.exports = (req, res) => {
  req.context.page.title = '404 Not Found | Electron'
  res.render('404', req.context)
}
