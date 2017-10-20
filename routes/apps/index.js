const apps = require('electron-apps')
const categories = require('electron-apps/categories')

module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    apps: apps,
    categories: categories
  })

  if (req.query.category) {
    const category = categories.find(category => category.slug === req.query.category)

    if (!category) {
      return res.status(404).render('404', {message: 'Category not found'})
    }

    context.apps = apps.filter((app) => app.category === category.name)
    context.categories = categories.map(category => {
      category.className = (category.slug === req.query.category) ? 'selected' : ''
      return category
    })
    context.currentCategory = req.query.category
  }

  context.totalAppCount = apps.length

  res.render('apps', context)
}
