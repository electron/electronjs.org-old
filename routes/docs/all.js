module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    layout: 'docs',
    viewingAllDocs: true
  })

  res.render('docs/all', context)
}
