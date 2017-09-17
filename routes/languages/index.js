module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    layout: 'page'
  })
  res.render('languages/index', req.context)
}