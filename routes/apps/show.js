const apps = require('electron-apps')
const categories = require('electron-apps/categories')
const { getPlatformFromFilename } = require('platform-utils')

module.exports = (req, res, next) => {
  const app = apps.find(app => app.slug === req.params.slug)

  if (!app) return next()

  if (app.category) {
    app.categorySlug = categories.find(category => category.name === app.category).slug
  }

  const context = Object.assign(req.context, {
    app: app,
    page: {
      title: `${app.name} | Apps | Electron`,
      url: req.url,
      description: app.description
    }
  })

  // attach platform labels like `darwin`, `win32`, and `linux`
  if (app.latestRelease && app.latestRelease.assets) {
    app.latestRelease.assets.forEach(asset => {
      asset.platform = getPlatformFromFilename(asset.name)
    })
  }

  context.page.image = (app.screenshots && app.screenshots.length)
    ? app.screenshots[0].imageUrl
    : `${process.env.HOST}/images/apps/${app.icon64}`

  res.render('apps/show', context)
}
