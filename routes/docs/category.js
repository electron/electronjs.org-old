const processes = require('../../data/processes.json')
const versions = require('../../data/versions.json')
const i18n = require('../../lib/i18n')
const singlePage = require('./show')

module.exports = (req, res, next) => {
  const doc = i18n.docs[req.language][req.path]
  if (doc) {
    return singlePage(req, res, next)
  }

  const categoryList = [
    { path: 'all', name: 'All the Electron Docs!' },
    { path: 'api', name: 'API' },
    { path: 'development', name: 'Development' },
    { path: 'tutorial', name: 'Guides' },
    { path: 'versions', name: 'Versions' }
  ]
  const category = req.params.category
  const selectedCategories = categoryList.filter(cat => cat.path === category)
  let context

  if (!selectedCategories.length) return next()

  const selectedCategory = selectedCategories[0]
  if (category === 'all') {
    context = Object.assign(req.context, {
      layout: 'docs',
      viewingAllDocs: true
    })
  } else if (category === 'versions') {
    context = Object.assign(req.context, {
      layout: 'docs',
      versions: versions
    })
  } else {
    context = Object.assign(req.context, {
      layout: 'docs',
      processes: processes,
      category: selectedCategory.name
    })
  }
  res.render(`docs/${category}`, context)
}
