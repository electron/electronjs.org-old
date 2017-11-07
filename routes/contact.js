module.exports = (req, res) => {
  res.render('contact', Object.assign(req.context,
    {
      page: {
        title: 'Contact | Electron'
      }
    }
  ))
}
