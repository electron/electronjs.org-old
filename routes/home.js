const apps = require('../lib/apps')

module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    apps: apps
  })

  res.render('home', context)
}
