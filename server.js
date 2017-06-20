const fs = require('fs')
const path = require('path')
const express = require('express')
const sass = require('node-sass-middleware')
const port = Number(process.env.PORT) || 5000
const jexodus = require('./lib/jexodus')(__dirname).on('ready', startServer)
const hbs = require('express-hbs')
const i18n = require('electron-i18n')
const app = express()
 
// app.engine('.hbs', exphbs({
//   defaultLayout: 'main',
//   extname: '.hbs'
// }))
// app.set('view engine', '.hbs')

app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, '/views/layouts/main.hbs'),
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/views'))

app.use(sass({
    src: path.join(__dirname, '_sass'),
    dest: path.join(__dirname, 'css'),
    debug: true,
    // outputStyle: 'compressed',
    prefix: '/css'
}))
app.use(jexodus.middleware)
app.use(express.static(__dirname))

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

  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
