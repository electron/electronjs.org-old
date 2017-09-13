const electronApps = require('../../data/apps.json')

module.exports = (req, res) => {
  let context = Object.assign(req.context, electronApps)

  if (req.query.category) {
    context.apps = electronApps.apps.filter((app) => app.categorySlug === req.query.category)
    context.categories = electronApps.categories
    context.currentCategory = req.query.category
  }

  context.categories.forEach((category) => {
    category.className = (category.slug === req.query.category) ? 'selected' : ''
  })

  context.appCount = context.apps.length

  res.render('apps', context)
}
