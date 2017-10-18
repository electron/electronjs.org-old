const processes = require('../../data/processes.json')
const versions = require('../../data/versions.json')

module.exports = (req, res) => {
  const category = req.params.category
  let context;
  if (['tutorial', 'api', 'development'].includes(category)) {
    const categories = {
      'tutorial': 'Guides',
      'api': 'API',
      'development': 'Development',
    }

    context = Object.assign(req.context, {
      layout: 'docs',
      processes: processes,
      category: categories[category]
    })
  } else if (category === 'all') {
    context = Object.assign(req.context, {
      layout: 'docs',
    })
  } else if (category === 'versions') {
    context = Object.assign(req.context, {
      layout: 'docs',
      versions: versions
    })
  }
  res.render(`docs/${category}`, context)
}