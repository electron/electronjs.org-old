const electronApps = require('../data/apps.json')

module.exports = (req, res) => {
  let appList = electronApps
  if (req.query.category) {
    let filteredApps = electronApps.apps.filter((app) => {
      return (app.categorySlug === req.query.category)
    })
    appList = {
      apps: filteredApps,
      categories: electronApps.categories,
      currentCategory: req.query.category
    }
  }
  electronApps.categories.forEach((category) => {
    if (category.slug === req.query.category) {
      category.className = 'selected'
    } else {
      category.className = ''
    }
  })

  appList.appLength = electronApps.apps.length
  appList.pageDetails = {
    title: 'Electron | Apps',
    url: req.url,
    description: 'Apps Built on Electron'
  }
  res.render('apps', appList)
}
