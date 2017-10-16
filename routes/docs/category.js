module.exports = (req, res) => {
  const category = req.params.category
  if (['tutorial', 'api', 'development'].includes(category)) {
    const categories = {
      'tutorial': 'Guides',
      'api': 'API',
      'development': 'Development',
    }

    const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);
    const context = Object.assign(req.context, {
      layout: 'docs',
      category: categories[category]
    })

    res.render(`docs/${category}`, context)
  }
}