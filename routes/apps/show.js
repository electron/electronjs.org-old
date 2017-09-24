const apps = require('electron-apps')

module.exports = (req, res) => {
  const app = apps.find(app => app.slug === req.params.slug)

  if (!app) return res.status(404).render('404')

  const context = Object.assign(req.context, {
    app: app,
    pageDetails: {
      title: `${app.name} | Apps | Electron`,
      url: req.url,
      description: app.description
    }
  })

  context.pageDetails.image = (app.screenshots && app.screenshots.length)
    ? app.screenshots[0].imageUrl
    : `${process.env.HOST}/images/apps/${app.icon64}`

  res.render('apps/show', context)
}
