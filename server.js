const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const i18n = require('./lib/i18n')
const express = require('express')
const lobars = require('lobars')

// Middleware
const hbs = require('express-hbs')
const compression = require('compression')
const slashes = require('connect-slashes')
const browsersync = require('./middleware/browsersync')
const browserify = require('./middleware/browserify')
const requestLanguage = require('express-request-language')
const cookieParser = require('cookie-parser')
const sass = require('./middleware/sass')
const helmet = require('helmet')
const contextBuilder = require('./middleware/context-builder')
const blog = require('./middleware/blog')

const port = Number(process.env.PORT) || argv.p || argv.port || 5000
const app = express()
process.env.HOST = process.env.HOST || `http://localhost:${port}`

// Handlebars Templates
hbs.registerHelper(lobars)
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

// Middleware
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))
app.use(compression())
app.use(helmet())
app.use(sass())
app.use('/scripts/index.js', browserify('scripts/index.js'))
app.use(slashes(false))
app.use(cookieParser())
app.use(requestLanguage({
  languages: Object.keys(i18n.locales),
  cookie: {
    name: 'language',
    url: '/languages/{language}'
  }
}))
app.use(express.static(__dirname))
app.use(contextBuilder)
app.use(blog)
app.use(browsersync())

// Routes
const routes = require('./routes')
app.get('/', routes.home)

app.get('/apps', routes.apps.index)
app.get('/app/:slug', (req, res) => res.redirect(`/apps/${req.params.slug}`))
app.get('/apps/:slug', routes.apps.show)

app.get('/docs/latest*', (req, res) => { res.redirect(req.path.replace(/^\/docs\/latest/ig, '/docs')) })
app.get('/docs/v0*', (req, res) => res.redirect(req.path.replace(/v0\.\d+\.\d+\//, '')))
app.get('/docs', routes.docs.index)
app.get('/docs/:category', routes.docs.category)
app.get('/docs/:category/*', routes.docs.show)

app.get('/issues', (req, res) => res.redirect(301, 'https://github.com/electron/electronjs.org/issues'))
app.get('/issues/new', (req, res) => res.redirect(301, 'https://github.com/electron/electronjs.org/issues/new'))
app.get('/pulls', (req, res) => res.redirect(301, 'https://github.com/electron/electronjs.org/pulls'))

app.get('/userland', routes.userland.index)
app.get('/userland/*', routes.userland.show)

app.get('/maintainers/join', (req, res) => res.redirect('https://goo.gl/FJmZZm'))
app.get('/awesome', (req, res) => res.redirect('/community'))
app.get('/community', routes.community)
app.get('/languages', routes.languages.index)
app.get('/contact', routes.contact)
app.get('/releases', routes.releases)

app.get('/devtron', routes.devtron)
app.get('/spectron', routes.spectron)
app.use('/crowdin', routes.languages.proxy)

// Generic 404 handler
app.use(routes._404)

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on ${port}`)
    if (process.env.NODE_ENV === 'production') {
      console.log(`If you're developing, you probably want \`npm run dev\`\n\n`)
    }
  })
}

module.exports = app
