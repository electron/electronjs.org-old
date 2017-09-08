const electronApps = require('../data/apps.json')

module.exports = (req, res) => {
  const app = electronApps.apps.find(app => app.slug === req.params.slug)
  const context = {
    app: app,
    pageDetails: {
      title: `Electron | Apps | ${app.name}`,
      url: req.url,
      description: app.description
    }
  }
  if (app.screenshots && app.screenshots.length > 0) {
    context.pageDetails.image = app.screenshots[0].imageUrl
  } else {
    context.pageDetails.image = `${process.env.HOST}/images/apps/${app.icon64}`
  }
  res.render('app', context)
}
