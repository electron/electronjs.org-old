const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const express = require('express')
const hbs = require('express-hbs')
const requireDir = require('require-dir')
const slashes = require('connect-slashes')
const browsersync = require('./lib/browsersync')()
const routes = requireDir('./routes')
const sass = require('./lib/sass')()
const helmet = require('helmet')
const port = Number(process.env.PORT) || argv.p || argv.port || 5000
const app = express()
const jexodus = require('./lib/jexodus')(__dirname).on('ready', startServer)
process.env.HOST = process.env.HOST || `http://localhost:${port}`

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
app.use(jexodus.middleware)
app.use(express.static(__dirname))
app.use(browsersync)

// Routes
app.get('/apps', routes.apps)
app.get('/app/:slug', (req, res) => res.redirect(`/apps/${req.params.slug}`))
app.get('/apps/:slug', routes.app)
app.get('/contact', routes.contact)
app.get('/docs', routes.docs)
app.get('/docs/*', routes.doc)

// Generic 404 handler
app.use((req, res, next) => res.status(404).render('404'))

function startServer () {
  app.bootstrapped = true
  if (module.parent) return
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
