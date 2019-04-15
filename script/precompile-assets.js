const path = require('path')
const stream = require('stream')
const fs = require('fs-extra')
const browserify = require('browserify')
const browserifyOptions = require('../middleware/browserify-opts')
const sass = require('node-sass')
const uglify = require('uglify-js')

function dir (...parts) {
  return path.join(__dirname, '..', ...parts)
}

function uglifyStream () {
  const buffers = []
  return new stream.Transform({
    transform (chunk, _encoding, callback) {
      buffers.push(chunk)
      callback()
    },

    flush (callback) {
      const code = Buffer.concat(buffers).toString()
      const compiled = uglify.minify(code)
      this.push(compiled.code)
      callback()
    }
  })
}

const PATHS = {
  precompiled: dir('precompiled'),
  scripts: dir('precompiled', 'scripts'),
  styles: dir('precompiled', 'styles'),
  nodeModules: dir('node_modules'),

  jsEntry: dir('scripts', 'index.js'),
  jsDestination: dir('precompiled', 'scripts', 'index.js'),

  cssEntry: dir('public', 'styles', 'index.scss'),
  cssDestination: dir('precompiled', 'styles', 'index.css')
}

async function precompileAssets () {
  try {
    console.log('Creating directories...')
    await fs.remove(PATHS.precompiled)
    await fs.ensureDir(PATHS.scripts)
    await fs.ensureDir(PATHS.styles)
    console.log('Precompiling JS...')
    await precompileJavaScript()
    console.log('Precompiling CSS...')
    await precompileCss()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

function precompileJavaScript () {
  return new Promise((resolve, reject) => {
    const b = browserifyOptions(browserify)(PATHS.jsEntry)
    const pipe = b.bundle()
      .pipe(uglifyStream())
      .pipe(fs.createWriteStream(PATHS.jsDestination))
    pipe.on('error', reject)
    pipe.on('finish', resolve)
  })
}

function precompileCss () {
  return new Promise((resolve, reject) => {
    sass.render({
      file: PATHS.cssEntry,
      includePaths: [
        PATHS.nodeModules
      ],
      outputStyle: 'compressed'
    }, async function onSassCompiled (err, result) {
      if (err) {
        return reject(err)
      }

      await fs.writeFile(PATHS.cssDestination, result.css)
      resolve()
    })
  })
}

if (require.main === module) {
  precompileAssets()
}
