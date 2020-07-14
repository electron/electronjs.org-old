const fs = require('fs')
const path = require('path')

// This module gets browserified with the `brfs` transform.
// Since brfs evaluates source code statically, you can't use dynamic
// expressions that need to be evaluated at runtime.
// See https://github.com/browserify/brfs#gotchas

module.exports = {
  app: fs.readFileSync(path.join(__dirname, 'app.hbs'), 'utf8'),
  api: fs.readFileSync(path.join(__dirname, 'api.hbs'), 'utf8'),
  package: fs.readFileSync(path.join(__dirname, 'package.hbs'), 'utf8'),
  tutorial: fs.readFileSync(path.join(__dirname, 'tutorial.hbs'), 'utf8'),
}
