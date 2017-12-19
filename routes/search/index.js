const dataSources = [
  'docs',
  'npmPackages'
]

module.exports = (req, res) => {
  const context = Object.assign({}, req.context)
  if (!req.params.searchIn || !dataSources.find((src) => src === req.params.searchIn)) {
    console.log('normal search')
    context.searchIn = dataSources
  } else {
    console.log(`searching in ${req.params.searchIn}`)
    context.searchIn = req.params.searchIn
  }
  res.render('search', context)
}