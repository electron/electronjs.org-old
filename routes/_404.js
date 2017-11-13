module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    page: {
      title: '404 Not Found | Electron'
    }
  })

  res.render('404', context)
}
