const apps = require('electron-apps')
const categories = require('electron-apps/categories')
const { getPlatformFromFilename } = require('platform-utils')

module.exports = (req, res, next) => {
  const app = apps.find((app) => app.slug === req.params.slug)

  if (!app) return next()

  if (app.category) {
    app.categorySlug = categories.find(
      (category) => category.name === app.category
    ).slug
  }

  const context = Object.assign(req.context, {
    app: app,
    page: {
      title: `${app.name} | Apps | Electron`,
      url: req.url,
      description: app.description,
    },
  })

  // attach platform labels like `darwin`, `win32`, and `linux`
  if (app.latestRelease && app.latestRelease.assets) {
    app.latestRelease.assets.forEach((asset) => {
      asset.platform = getPlatformFromFilename(asset.name)
    })
  }

  const appImageUrl =
    app.screenshots && app.screenshots.length
      ? app.screenshots[0].imageUrl
      : `${req.context.hostname}/app-img/${app.slug}/${app.icon64}`
  context.page.image = appImageUrl

  if (app.youtube_video_url) {
    context.app.youtube_video_url = app.youtube_video_url.replace(
      'watch?v=',
      'embed/'
    )
  }

  res.render('apps/show', context)
}
