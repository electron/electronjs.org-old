// const localized = require('require-yml')('../data/locale.yml')
const {docs} = require('electron-i18n')

module.exports = (req, res) => {
  res.render('docs/index', req.context)
}


