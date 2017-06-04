const fs = require('fs')
const path = require('path')
const express = require('express')
const sass = require('node-sass-middleware')
const port = Number(process.env.PORT) || 5000
const jexodus = require('./lib/jexodus')(__dirname).on('ready', startServer)
const app = express()

app.use(sass({
    src: path.join(__dirname, '_sass'),
    dest: path.join(__dirname, 'css'),
    debug: true,
    // outputStyle: 'compressed',
    prefix: '/css'
}))

const middleware = function (req, res, next) {
  const page = jexodus.routes[req.path]
  console.log(req.path)
  if (page) {
    return jexodus.render(req.path).then(output => res.send(output))
  } else {
    return next()
  }
}

app.use(middleware)

app.use(express.static(__dirname))


// app.get('/', function (req, res) {
//   jexodus.render('/').then(output => res.send(output))
// })

// app.get('/docs', function (req, res) {
//   jexodus.render('/docs').then(output => res.send(output))
// })

function startServer () {
  if (module.parent) return

  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
