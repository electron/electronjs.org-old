require('make-promises-safe')

const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const i18n = require('./lib/i18n')
const express = require('express')
const lobars = require('lobars')

// Middleware
const hbs = require('express-hbs')
const useragent = require('express-useragent')
const compression = require('compression')
const slashes = require('connect-slashes')
const browsersync = require('./middleware/browsersync')
const requestLanguage = require('express-request-language')
const cookieParser = require('cookie-parser')
const sass = require('./middleware/sass')
const helmet = require('helmet')
const langResolver = require('./middleware/lang-resolver')
const contextBuilder = require('./middleware/context-builder')
const getOcticons = require('./middleware/register-octicons')
const feedback = require('./middleware/feedback')

const port = Number(process.env.PORT) || argv.p || argv.port || 5000
const app = express()
const appImgDir = path.resolve(require.resolve('electron-apps'), '..', 'apps')

const isProduction = process.env.NODE_ENV === 'production'

const staticSettings = {
  redirect: false,
  maxAge: isProduction ? 31557600000 : 0,
}

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

  if (data.hash.class) {
    return console.error(
      `ERROR(Octicons Helper): Use 'className' instead of 'class'.`
    )
  }

  if (name === undefined) {
    return console.error(
      'ERROR(Octicons Helper): Name is required field in octicon helper.'
    )
  }

  const htmlSVG = await getOcticons(name, className, width, height, ariaLabel)
  return cb(new hbs.SafeString(htmlSVG))
})
app.engine(
  'hbs',
  hbs.express4({
    defaultLayout: path.join(__dirname, '/views/layouts/main.hbs'),
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '/views/layouts'),
    partialsDir: path.join(__dirname, '/views/partials'),
    onCompile: function (exhbs, source, filename) {
      var options = { preventIndent: true }
      return exhbs.handlebars.compile(source, options)
    },
  })
)

// Middleware
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/views'))
app.use(compression())
app.use(
  helmet({
    contentSecurityPolicy: false,
    referrerPolicy: false,
  })
)

// Helper to generate the redirects to the right document in the new docs paths
hbs.registerHelper('new-docs', (currentPage) => {
  // This particular page is the root for the docs in the new site
  if (!currentPage || currentPage.endsWith('tutorial/introduction')) {
    return '/docs/latest/'
  } else {
    return currentPage.replace('docs/', 'docs/latest/')
  }
})

if (isProduction) {
  const jsManifest = require(path.join(
    __dirname,
    'precompiled',
    'scripts',
    'manifest.json'
  ))
  const cssManifest = require(path.join(
    __dirname,
    'precompiled',
    'styles',
    'manifest.json'
  ))
  const imagesManifest = require(path.join(
    __dirname,
    'precompiled',
    'images',
    'manifest.json'
  ))
  hbs.registerHelper('static-asset', (type, ...parts) => {
    // `parts` should be at minimum [name, function]
    // but it could also be [part1, part2, part3, function ]
    // if we want to link to dynamic images
    const name = parts.length === 2 ? parts[0] : parts.slice(0, -1).join('')

    if (type === 'js') {
      return jsManifest[name] || 'unknown.name'
    }
    if (type === 'css') {
      return cssManifest[name] || 'unknown.name'
    }
    if (type === 'image') {
      return imagesManifest[name] || 'unknown.name'
    }
    return 'unknown.type'
  })
} else {
  hbs.registerHelper('static-asset', (type, ...parts) => {
    const name = parts.length === 2 ? parts[0] : parts.slice(0, -1).join('')

    if (type === 'js') {
      return `/scripts/${name}`
    }
    if (type === 'css') {
      return `/styles/${name}`
    }
    if (type === 'image') {
      return `/images${name}`
    }
    return 'unknown.type'
  })
}
if (isProduction) {
  console.log('Production app detected; serving JS and CSS from disk')
  app.use(express.static(path.join(__dirname, 'precompiled'), staticSettings))
} else if (process.env.NODE_ENV === 'development') {
  console.log('Dev app detected; compiling JS and CSS in memory')
  app.use(sass())
  const webpack = require('./middleware/webpack')
  app.use(webpack())
} else {
  app.use(sass())
}
app.get('/service-worker.js', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'scripts', 'service-worker.js'))
)
app.use(cookieParser())
app.use(
  requestLanguage({
    languages: Object.keys(i18n.locales),
    cookie: {
      name: 'language',
      options: { maxAge: 30 * 24 * 60 * 60 * 1000 },
      url: '/languages/{language}',
    },
  })
)
app.use(express.static(path.join(__dirname, 'public'), staticSettings))
app.use('/images/app-img', express.static(appImgDir, staticSettings))
app.use(slashes(false))
app.use(langResolver)
app.use(contextBuilder)
app.use(browsersync())
app.use(useragent.express())

// Routes
const routes = require('./routes')
app.get('/', routes.home)
app.get('/app/:slug', (req, res) => res.redirect(`/apps/${req.params.slug}`))
app.get('/apps', routes.apps.index)
app.get('/apps/:slug', routes.apps.show)
app.use('/blacklivesmatter', routes.blacklivesmatter)
app.get('/blog', routes.blog.index)
app.get('/blog/:slug', routes.blog.show)
app.get('/blog/:y/:m/:d/:slug', routes.blog.show)
app.get('/blog.json', routes.feed.blog)
app.get('/blog.xml', routes.feed.blog)
app.get('/community', routes.community)
app.get('/contact', (req, res) => res.redirect(301, '/community'))
app.use('/crowdin', routes.languages.proxy)
app.get('/devtron', routes.devtron)
app.use('/docs', feedback)
app.get('/docs', routes.docs.index)
app.get('/docs/versions', (req, res) => res.redirect(301, '/releases/stable'))
app.get('/docs/:category', routes.docs.category)
app.get('/docs/api/structures', routes.docs.structures)
app.get('/docs/*/history', routes.docs.history)
app.get('/docs/:category/*', routes.docs.show)
app.use('/donors', routes.donors)
app.get('/fiddle', routes.fiddle)
app.get('/governance', routes.governance.index)
app.use('/headers/*', routes.headers)
app.get('/languages', routes.languages.index)
app.get('/releases', (req, res) => res.redirect(301, '/releases/stable'))
app.get('/releases/stable', routes.releases.index('stable'))
app.get('/releases/beta', routes.releases.index('beta'))
app.get('/releases/nightly', routes.releases.index('nightly'))
app.get('/releases.json', routes.feed.releases)
app.get('/releases.xml', routes.feed.releases)
app.get('/search/:searchIn*?*', (req, res) =>
  res.redirect(req.query.q ? `/?query=${req.query.q}` : `/`)
)
app.get('/spectron', routes.spectron)
app.get('/userland', routes.userland.index)
app.get('/userland/*', routes.userland.show)

// External redirects
app.get('/issues', (req, res) =>
  res.redirect(301, 'https://github.com/electron/electronjs.org/issues')
)
app.get('/issues/new', (req, res) =>
  res.redirect(301, 'https://github.com/electron/electronjs.org/issues/new')
)
app.get('/maintainers/join', (req, res) =>
  res.redirect('https://airtable.com/shrNrpaXIJiRZj6bS')
)
app.get('/pulls', (req, res) =>
  res.redirect(301, 'https://github.com/electron/electronjs.org/pulls')
)

// Redirected old paths
app.get('/awesome', (req, res) => res.redirect('/community'))
app.get('/docs/latest*', (req, res) =>
  res.redirect(req.path.replace(/^\/docs\/latest/gi, '/docs'))
)
app.get('/docs/v0*', (req, res) =>
  res.redirect(req.path.replace(/^\/docs\/v0\.\d+\.\d+/gi, '/docs'))
)
app.get('/docs/api/breaking-changes', (req, res) =>
  res.redirect(301, '/docs/breaking-changes')
)
app.get('/docs/tutorial/faq', (req, res) => res.redirect('/docs/faq'))
app.get('/docs/tutorial/first-app', (_, res) => {
  res.redirect(301, '/docs/tutorial/quick-start')
})
app.get('/docs/tutorial/application-architecture', (_, res) => {
  res.redirect(301, '/docs/tutorial/quick-start')
})

// Generic 404 handler
app.use(routes._404)

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`)
    if (isProduction) {
      console.log(`If you're developing, you probably want \`npm run dev\`\n\n`)
    }
  })
}

module.exports = app
