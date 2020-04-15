const processes = require('../../data/processes.json')
const i18n = require('../../lib/i18n')
const singlePage = require('./show')
const parseVersions = require('./index')

module.exports = (req, res, next) => {
  if (
    i18n.electronSupportedVersions.includes(req.params.category) &&
    !req.params.versionedCategory
  ) {
    return parseVersions(req, res)
  }
  const doc = i18n.docs[req.language][req.path]
  if (doc) {
    return singlePage(req, res, next)
  }

  const categoryList = [
    { path: 'all', name: 'All the Electron Docs!' },
    { path: 'api', name: 'API' },
    { path: 'development', name: 'Development' },
    { path: 'tutorial', name: 'Guides' },
  ]
  const category = req.params.versionedCategory
    ? req.params.versionedCategory
    : req.params.category
  const selectedCategories = categoryList.filter((cat) => cat.path === category)
  let context

  if (!selectedCategories.length) return next()

  const selectedCategory = selectedCategories[0]
  if (category === 'all') {
    context = Object.assign(req.context, {
      layout: 'docs',
      viewingAllDocs: true,
    })
  } else {
    context = Object.assign(req.context, {
      layout: 'docs',
      processes: processes,
      category: selectedCategory.name,
    })
  }

  res.render(`docs/${category}`, context)
}
