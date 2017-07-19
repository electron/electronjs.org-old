const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const express = require('express')
const hbs = require('express-hbs')
const i18n = require('electron-i18n')
const slashes = require('connect-slashes')
const browsersync = require('./lib/browsersync')()
const electronApps = require('./data/apps.json')
const sass = require('./lib/sass')()
const helmet = require('helmet')
const port = Number(process.env.PORT) || argv.p || argv.port || 5000
const app = express()
const jexodus = require('./lib/jexodus')(__dirname).on('ready', startServer)
const host = process.env.HOST || `http://localhost:${port}`

app.engine('html', hbs.express4({
  defaultLayout: path.join(__dirname, '/views/layouts/main.html'),
  extname: '.html',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, 'partials'),
  onCompile: function (exhbs, source, filename) {
    var options = {}
    return exhbs.handlebars.compile(source, options)
  }
}))

app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))
app.use(helmet())
app.use(sass)
app.use(slashes(false))
app.use(jexodus.middleware)
app.use(express.static(__dirname))
app.use(browsersync)

app.get('/docs/api/:slug', (req, res) => {
  const locale = 'fr-FR'
  const api = i18n.api.get(req.params.slug, locale)
  const context = {
    api: api,
    layout: 'docs'
  }
  res.render('api', context)
})

app.get('/apps', (req, res) => {
  let appList = electronApps
  if (req.query.category) {
    let filteredApps = electronApps.apps.filter((app) => {
      return (app.categorySlug === req.query.category)
    })
    appList = {
      apps: filteredApps,
      categories: electronApps.categories,
      currentCategory: req.query.category
    }
  }
  electronApps.categories.forEach((category) => {
    if (category.slug === req.query.category) {
      category.className = 'selected'
    } else {
      category.className = ''
    }
  })

  appList.appLength = electronApps.apps.length
  appList.pageDetails = {
    title: 'Electron | Apps',
    url: req.url,
    description: 'Apps Built on Electron'
  }
  res.render('apps', appList)
})

app.get('/app/:slug', (req, res) => {
  res.redirect(`/apps/${req.params.slug}`)
})

app.get('/apps/:slug', (req, res) => {
  const app = electronApps.apps.find(app => app.slug === req.params.slug)
  const context = {
    app: app,
    pageDetails: {
      title: `Electron | Apps | ${app.name}`,
      url: req.url,
      description: app.description
    }
  }
  if (app.screenshots && app.screenshots.length > 0) {
    context.pageDetails.image = app.screenshots[0].imageUrl
  } else {
    context.pageDetails.image = `${host}/images/apps/${app.icon64}`
  }
  res.render('app', context)
})

function startServer () {
  app.bootstrapped = true
  if (module.parent) return
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
