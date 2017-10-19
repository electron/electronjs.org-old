const requireDir = require('require-dir')

module.exports = (req, res) => {
  const categories = requireDir(__dirname + '/../../data/userland')
  const context = Object.assign(req.context, {
    categories: categories
  })

  res.render('userland/index', context)
}
