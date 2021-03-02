const crypto = require('crypto')
const path = require('path')
const fs = require('fs-extra')
const sass = require('node-sass')

function dir(...parts) {
  return path.join(__dirname, '..', ...parts)
}

const env = process.env.NODE_ENV

const PATHS = {
  precompiled: dir('precompiled'),
  styles: dir('precompiled', 'styles'),
  nodeModules: dir('node_modules'),

  cssEntry: dir('public', 'styles', 'index.scss'),
  cssDestinationDir: dir('precompiled', 'styles'),
}

async function precompileAssets() {
  try {
    console.log('Creating directories...')
    await fs.ensureDir(PATHS.styles)
    console.log('Precompiling CSS...')
    await precompileCss()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

function precompileCss() {
  return new Promise((resolve, reject) => {
    sass.render(
      {
        file: PATHS.cssEntry,
        includePaths: [PATHS.nodeModules],
        outputStyle: 'compressed',
      },
      async function onSassCompiled(err, result) {
        if (err) {
          return reject(err)
        }

        const cssHash = crypto
          .createHash('md4')
          .update(result.css)
          .digest('hex')
        const cssFileName =
          env === 'production' ? `index.${cssHash}.min.css` : 'index.css'
        const cssFile = path.resolve(PATHS.cssDestinationDir, cssFileName)

        await fs.writeFile(cssFile, result.css)
        await fs.writeFile(
          path.resolve(PATHS.cssDestinationDir, 'manifest.json'),
          JSON.stringify({ 'index.css': `/styles/${cssFileName}` }, null, 2)
        )
        resolve()
      }
    )
  })
}

if (require.main === module) {
  precompileAssets().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
