module.exports = (req, res) => {
  const category = req.params.category
  if (['tutorial', 'api', 'advanced'].includes(category)) {
    const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);
    const context = Object.assign(req.context, {
      layout: 'docs',
      category: capitalize(category)
    })

    res.render(`docs/${category}`, context)
  }
}