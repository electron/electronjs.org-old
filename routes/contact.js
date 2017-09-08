// const localized = require('require-yml')('../data/locale.yml')

module.exports = (req, res) => {
  const context = {
    // pageDetails: Object.assign({}, localized.pages[req.path])
  }
  res.render('contact', context)
}
