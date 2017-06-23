const path = require('path')
const express = require('express')
const port = Number(process.env.PORT) || 5000
const hbs = require('express-hbs')
const i18n = require('electron-i18n')
const browsersync = require('./lib/browsersync')()
const sass = require('./lib/sass')()
const app = express()

app.jexodus = require('./lib/jexodus')(__dirname).on('ready', startServer)

app.engine('html', hbs.express4({
  defaultLayout: path.join(__dirname, '/views/layouts/main.html'),
  extname: '.html',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials'),
  onCompile: function (exhbs, source, filename) {
    var options = {}
    return exhbs.handlebars.compile(source, options)
  }
}))

app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))
app.use(sass)
// app.use(app.jexodus.middleware)
app.use(express.static(__dirname))
app.use(browsersync)

app.get('/docs/api/:apiName', (req, res) => {
  const locale = 'fr-FR'
  const api = i18n.api.get(req.params.apiName, locale)
  const context = {
    api: api,
    layout: 'docs'
  }
  res.render('api', context)
})

function startServer () {
  if (module.parent) return
  app.bootstrapped = true
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
