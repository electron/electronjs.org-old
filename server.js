const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const express = require('express')
const hbs = require('express-hbs')
const i18n = require('electron-i18n')

// TODO(zeke): Get locale from `i18n` instead
const localized = require('require-yml')('./data/locale.yml')

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

app.get('/contact', (req, res) => {
  const context = {
    pageDetails: Object.assign({}, localized.pages[req.path])
  }
  res.render('contact', context)
})

app.get('/docs', (req, res) => {
  const locale = 'en'

  if (!i18n[locale]) {
    return res.status(404).render('404', {message: `Invalid locale: ${locale}`})
  }

  const docs = Object.keys(i18n[locale])
    .map(href => i18n[locale][href])
    .sort((a, b) => (a.slug).localeCompare((b.slug)))

  const context = {
    pageDetails: Object.assign({}, localized.pages[req.path]),
    docs: docs
  }
  res.render('docs/index', context)
})

app.get('/docs/*', (req, res) => {
  const locale = 'en'
  const href = req.path

  if (!i18n[locale]) {
    return res.status(404).render('404', {message: `Invalid locale: ${locale}`})
  }

  const doc = i18n[locale][href]

  if (!doc) {
    return res.status(404).render('404', {message: `Document not found`})
  }

  const context = {
    pageDetails: Object.assign({}, localized.pages[req.path]),
    doc: doc,
    title: doc.title,
    layout: 'docs'
  }
  res.render('docs/show', context)
})

app.use(function (req, res, next) {
  res.status(404).render('404')
})

function startServer () {
  app.bootstrapped = true
  if (module.parent) return
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
