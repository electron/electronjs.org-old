const path = require('path')
const fs = require('fs')
const sass = require('node-sass')

const source      = path.join(__dirname, '../public/styles/index.scss')
const destination = path.join(__dirname, '../precompiled/styles/index.css')

sass.render({
  file: source,
  includePaths: [
    path.join(__dirname, '../node_modules')
  ]
}, function onSassCompiled (err, result) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  fs.writeFileSync(destination, result.css)
})
