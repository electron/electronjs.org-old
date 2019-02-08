const path = require('path')
const fs = require('fs')
const browserify = require('browserify')
const browserifyOptions = require('../middleware/browserify-opts')

const entry = path.join(__dirname, '../scripts/index.js')
const destination = path.join(__dirname, '../precompiled/scripts/index.js')

const b = browserifyOptions(browserify)(entry)
b.bundle().pipe(fs.createWriteStream(destination))
