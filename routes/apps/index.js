const apps = require('electron-apps')
const categories = require('electron-apps/categories')

module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    apps: apps,
    categories: categories
  })

  if (req.query.category) {
    context.apps = apps.filter((app) => app.categorySlug === req.query.category)
    context.categories = categories.map(category => {
      category.className = (category.slug === req.query.category) ? 'selected' : ''
    })
    context.currentCategory = req.query.category
  }

  context.appCount = context.apps.length

  res.render('apps', context)
}
