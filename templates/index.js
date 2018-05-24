const fs = require('fs')
const path = require('path')

module.exports = {
  app: fs.readFileSync(path.join(__dirname, 'app.html'), 'utf8'),
  api: fs.readFileSync(path.join(__dirname, 'api.html'), 'utf8'),
  package: fs.readFileSync(path.join(__dirname, 'package.html'), 'utf8'),
  tutorial: fs.readFileSync(path.join(__dirname, 'tutorial.html'), 'utf8')
}
