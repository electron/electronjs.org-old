const processes = require('../../data/processes.json')
const versions = require('../../data/versions.json')

module.exports = (req, res) => {
  const categoryList = [
    { path: 'all', name: 'All the Electron Docs!' },
    { path: 'tutorial', name: 'Guides' },
    { path: 'api', name: 'API' },
    { path: 'development', name: 'Development' },
    { path: 'versions', name: 'Versions' }
  ]
  const category = req.params.category
  const selectedCategories = categoryList.filter(cat => cat.path === category)
  let context

  if (selectedCategories.length > 0) {
    const selectedCategory =  selectedCategories[0]
    if (category === 'all') {
      context = Object.assign(req.context, {
        page: {
          title: `${selectedCategory.name} | Electron`
        },
        layout: 'docs',
        viewingAllDocs: true
      })
    } else if (category === 'versions') {
      context = Object.assign(req.context, {
        page: {
          title: `${selectedCategory.name} | Electron`
        },
        layout: 'docs',
        versions: versions
      })
    } else {
      context = Object.assign(req.context, {
        page: {
          title: `${selectedCategory.name} | Electron`
        },
        layout: 'docs',
        processes: processes,
        category: selectedCategory.name
      })
    }
    res.render(`docs/${category}`, context)
  }  else {
    res.status(404).render('404')
  }
}
