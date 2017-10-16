const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const i18n = require('./lib/i18n')
const express = require('express')
const lobars = require('lobars')

// Middleware
const hbs = require('express-hbs')
const slashes = require('connect-slashes')
const browsersync = require('./lib/browsersync')()
const requestLanguage = require('express-request-language')
const cookieParser = require('cookie-parser')
const sass = require('./lib/sass')()
const helmet = require('helmet')
const contextBuilder = require('./lib/context-builder')
const blogHandler = require('./lib/blog')

const port = Number(process.env.PORT) || argv.p || argv.port || 5000
const app = express()
process.env.HOST = process.env.HOST || `http://localhost:${port}`

// Handlebars Templates
hbs.registerHelper(lobars)
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

// Middleware
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))
app.use(helmet())
app.use(sass)
app.use(slashes(false))
app.use(cookieParser())
app.use(requestLanguage({
  languages: Object.keys(i18n.locales),
  cookie: {
    name: 'language',
    options: {maxAge: 24 * 60 * 60 * 1000},
    url: '/languages/{language}'
  }
}))
app.use(contextBuilder)
app.use(blogHandler)
app.use(express.static(__dirname))
app.use(browsersync)

// Routes
const routes = require('./routes')
app.get('/', routes.home)

app.get('/apps', routes.apps.index)
app.get('/app/:slug', (req, res) => res.redirect(`/apps/${req.params.slug}`))
app.get('/apps/:slug', routes.apps.show)

app.get('/docs', routes.docs.index)
app.get('/docs/*', routes.docs.show)

app.get('/userland', routes.userland.index)
app.get('/userland/*', routes.userland.show)

app.get('/community', routes.community)
app.get('/languages', routes.languages.index)
app.get('/contact', routes.contact)
app.get('/releases', routes.releases)

// Generic 404 handler
app.use((req, res, next) => res.status(404).render('404'))

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
