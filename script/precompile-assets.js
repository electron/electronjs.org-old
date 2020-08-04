const path = require('path')
const fs = require('fs-extra')
const sass = require('node-sass')

function dir(...parts) {
  return path.join(__dirname, '..', ...parts)
}

const PATHS = {
  precompiled: dir('precompiled'),
  styles: dir('precompiled', 'styles'),
  nodeModules: dir('node_modules'),

  cssEntry: dir('public', 'styles', 'index.scss'),
  cssDestination: dir('precompiled', 'styles', 'index.css'),
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

        await fs.writeFile(PATHS.cssDestination, result.css)
        resolve()
      }
    )
  })
}

if (require.main === module) {
  precompileAssets()
}
