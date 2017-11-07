const apps = require('../lib/apps')

module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    apps: apps,
    page: {
      title: 'Electron | Build cross platform desktop apps with JavaScript, HTML, and CSS.',
      description: 'Build cross platform desktop apps with JavaScript, HTML, and CSS.'
    }
  })

  res.render('home', context)
}
