const processes = require('../../data/processes.json')

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
  }
  res.render(`docs/${category}`, context)
}