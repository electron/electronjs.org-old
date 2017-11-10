const requireDir = require('require-dir')
const path = require('path')

module.exports = (req, res) => {
  const categories = requireDir(path.join(__dirname, '../../data/userland'))
  const context = Object.assign(req.context, {
    categories: categories
  })

  res.render('userland/index', context)
}
