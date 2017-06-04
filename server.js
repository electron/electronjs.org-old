const fs = require('fs')
const path = require('path')
const express = require('express')
const sass = require('node-sass-middleware')
const port = Number(process.env.PORT) || 5000
const app = express()

app.use(sass({
    src: __dirname,
    dest: __dirname,
    debug: true,
    // outputStyle: 'compressed',
    // prefix:  '/prefix'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}))

app.use(express.static(__dirname))
const jexodus = require('./lib/jexodus')(__dirname).on('ready', startServer)

app.get('/', function (req, res) {
  jexodus.render('/').then(output => res.send(output))
})

function startServer () {
  if (module.parent) return

  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
