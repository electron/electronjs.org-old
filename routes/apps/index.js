const apps = require('../../lib/apps')
const categories = require('electron-apps/categories')

module.exports = (req, res, next) => {
  const context = Object.assign(req.context, {
    apps: apps,
    categories: categories
  })

  if (req.query.category) {
    const category = categories.find(category => category.slug === req.query.category)

    if (!category) return next()

    context.apps = apps.filter((app) => app.category === category.name)
    context.currentCategory = req.query.category
  }

  context.categories = categories.map(category => {
    category.className = (category.slug === req.query.category) ? 'selected' : ''
    return category
  })

  context.totalAppCount = apps.length

  res.render('apps', context)
}
