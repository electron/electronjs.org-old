require('make-promises-safe')

const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const i18n = require('./lib/i18n')
const express = require('express')
const lobars = require('lobars')

// Middleware
const hbs = require('express-hbs')
const compression = require('compression')
const slashes = require('connect-slashes')
const nakedRedirect = require('express-naked-redirect')
const browsersync = require('./middleware/browsersync')
const browserify = require('./middleware/browserify')
const requestLanguage = require('express-request-language')
const cookieParser = require('cookie-parser')
const sass = require('./middleware/sass')
const helmet = require('helmet')
const langResolver = require('./middleware/lang-resolver')
const contextBuilder = require('./middleware/context-builder')
const getOcticons = require('./middleware/register-octicons')

const port = Number(process.env.PORT) || argv.p || argv.port || 5000
const app = express()
const appImgDir = path.resolve(require.resolve('electron-apps'), '..', 'apps')
process.env.HOST = process.env.HOST || `http://localhost:${port}`

// Handlebars Templates
hbs.registerHelper(lobars)

/**
 * Handlebars helper that accepts options from the `{{octicon}}` tag,
 * parses with `getOcticons()` function and returns this to user.
 *
 * @param {string[]} data The data of hbs helper.
 * @param {void} cb Async callback.
 */
hbs.registerAsyncHelper('octicon', async (data, cb) => {
  const { name, className, ariaLabel, width, height } = data.hash

  if (name === undefined) {
    return console.error('ERROR(Octicons Helper): Name is required field in octicon helper.')
  }

  const htmlSVG = await getOcticons(name, className, width, height, ariaLabel)
  return cb(new hbs.SafeString(htmlSVG))
})
app.engine('html', hbs.express4({
  defaultLayout: path.join(__dirname, '/views/layouts/main.html'),
  extname: '.html',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials'),
  onCompile: function (exhbs, source, filename) {
    var options = { preventIndent: true }
    return exhbs.handlebars.compile(source, options)
  }
}))

// Middleware
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))
app.use(nakedRedirect(true, 'www', 302))
app.use(compression())
app.use(helmet())
if (process.env.NODE_ENV === 'production') {
  console.log('Production app detected; serving JS and CSS from disk')
  app.use(express.static(path.join(__dirname, 'precompiled'), { redirect: false }))
} else {
  console.log('Dev app detected; compiling JS and CSS in memory')
  app.use(sass())
  app.use('/scripts/index.js', browserify('scripts/index.js'))
}
app.get('/service-worker.js', (req, res) => res.sendFile(path.resolve(__dirname, 'scripts', 'service-worker.js')))
app.use(cookieParser())
app.use(requestLanguage({
  languages: Object.keys(i18n.locales),
  cookie: {
    name: 'language',
    options: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    url: '/languages/{language}'
  }
}))
app.use(express.static(path.join(__dirname, 'public'), { redirect: false }))
app.use('/app-img', express.static(appImgDir, { redirect: false }))
app.use(slashes(false))
app.use(langResolver)
app.use(contextBuilder)
app.use(browsersync())

// Routes
const routes = require('./routes')
app.get('/', routes.home)
app.get('/app/:slug', (req, res) => res.redirect(`/apps/${req.params.slug}`))
app.get('/apps', routes.apps.index)
app.get('/apps/:slug', routes.apps.show)
app.get('/awesome', (req, res) => res.redirect('/community'))
app.get('/blog', routes.blog.index)
app.get('/blog/:slug', routes.blog.show)
app.get('/blog/:y/:m/:d/:slug', routes.blog.show)
app.get('/blog.json', routes.feed.blog)
app.get('/blog.xml', routes.feed.blog)
app.get('/releases.json', routes.feed.releases)
app.get('/releases.xml', routes.feed.releases)
app.get('/community', routes.community)
app.get('/contact', (req, res) => res.redirect(301, '/community'))
app.get('/devtron', routes.devtron)
app.get('/docs', routes.docs.index)
app.get('/docs/versions', (req, res) => res.redirect(301, '/releases/stable'))
app.get('/docs/:category', routes.docs.category)
app.get('/docs/api/structures', routes.docs.structures)
app.get('/docs/*/history', routes.docs.history)
app.get('/docs/:category/*', routes.docs.show)
app.get('/docs/latest*', (req, res) => res.redirect(req.path.replace(/^\/docs\/latest/ig, '/docs')))
app.get('/docs/v0*', (req, res) => res.redirect(req.path.replace(/^\/docs\/v0\.\d+\.\d+/ig, '/docs')))
app.get('/docs/tutorial/faq', (req, res) => res.redirect('/docs/faq'))
app.get('/governance', routes.governance.index)
app.get('/issues', (req, res) => res.redirect(301, 'https://github.com/electron/electronjs.org/issues'))
app.get('/issues/new', (req, res) => res.redirect(301, 'https://github.com/electron/electronjs.org/issues/new'))
app.get('/languages', routes.languages.index)
app.get('/maintainers/join', (req, res) => res.redirect('https://goo.gl/FJmZZm'))
app.get('/pulls', (req, res) => res.redirect(301, 'https://github.com/electron/electronjs.org/pulls'))
app.get('/releases', (req, res) => res.redirect(301, '/releases/stable'))
app.get('/releases/stable', routes.releases.index('stable'))
app.get('/releases/beta', routes.releases.index('beta'))
app.get('/releases/nightly', routes.releases.index('nightly'))
app.get('/spectron', routes.spectron)
app.get('/fiddle', routes.fiddle)
app.get('/userland', routes.userland.index)
app.get('/userland/*', routes.userland.show)
app.use('/crowdin', routes.languages.proxy)
app.use('/donors', routes.donors)
app.use('/headers/*', routes.headers)
app.get('/search/:searchIn*?*', (req, res) => res.redirect(req.query.q ? `/?query=${req.query.q}` : `/`))

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
