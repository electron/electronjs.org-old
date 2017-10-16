const processes = require('../../data/processes.json')

module.exports = (req, res) => {
  const category = req.params.category
  if (['tutorial', 'api', 'development'].includes(category)) {
    const categories = {
      'tutorial': 'Guides',
      'api': 'API',
      'development': 'Development',
    }

    const context = Object.assign(req.context, {
      layout: 'docs',
      processes: processes,
      category: categories[category]
    })

    res.render(`docs/${category}`, context)
  }
}