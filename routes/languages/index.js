module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    layout: 'docs'
  })
  res.render('languages/index', req.context)
}