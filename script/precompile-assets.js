const crypto = require('crypto')
const path = require('path')
const fs = require('fs-extra')
const sass = require('node-sass')
const globby = require('globby')

function dir(...parts) {
  return path.posix.join(__dirname, '..', ...parts)
}

const env = process.env.NODE_ENV

const PATHS = {
  precompiled: dir('precompiled'),
  styles: dir('precompiled', 'styles'),
  nodeModules: dir('node_modules'),

  cssEntry: dir('public', 'styles', 'index.scss'),
  cssDestinationDir: dir('precompiled', 'styles'),

  imagesDir: dir('public', 'images'),
  imageDestinationDir: dir('precompiled', 'images'),

  appImgDir: dir('node_modules', 'electron-apps', 'apps'),
  appImgDestinationDir: dir('precompiled', 'images', 'app-img'),
}

async function precompileAssets() {
  try {
    console.log('Creating directories...')
    await fs.ensureDir(PATHS.styles)
    await fs.ensureDir(PATHS.imageDestinationDir)
    console.log('Precompiling CSS...')
    await precompileCss()
    console.log('Hashing images...')
    await precompileImages()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

function calculateHash(content) {
  const hash = crypto.createHash('md4').update(content).digest('hex')

  return hash
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

        const cssHash = calculateHash(result.css)
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

async function precompileImages() {
  // globby patterns only accept `/` (https://github.com/sindresorhus/globby#api)
  const websiteImages = await globby(`${PATHS.imagesDir}/**/*`, {
    onlyFiles: true,
  })

  const appImages = await globby(`${PATHS.appImgDir}/**/*.png`, {
    onlyFiles: true,
  })

  const images = [...appImages, ...websiteImages]

  const manifest = {}

  for (const image of images) {
    const basename = path.basename(image)
    const extension = path.extname(image)
    const filename = basename.replace(extension, '')
    const content = await fs.readFile(image)
    // We could optimize the images here and save a few bytes
    const hash = calculateHash(content)

    // Can't use `path.resolve` here because the resulting path on Windows
    // will make the calculation of `value` later on even more convoluted
    const imageDestination = image
      .replace(PATHS.imagesDir, PATHS.imageDestinationDir)
      .replace(PATHS.appImgDir, PATHS.appImgDestinationDir)
      .replace(basename, `${filename}.${hash}${extension}`)

    const finalDir = path.dirname(imageDestination)

    await fs.ensureDir(finalDir)
    await fs.copyFile(image, imageDestination)

    const key = image.includes(PATHS.imagesDir)
      ? `${image.replace(PATHS.imagesDir, '')}`
      : `/app-img${image.replace(PATHS.appImgDir, '')}`

    const value = `/images${imageDestination.replace(
      PATHS.imageDestinationDir,
      ''
    )}`

    manifest[key] = value
  }

  await fs.writeFile(
    path.resolve(PATHS.imageDestinationDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  )
}

if (require.main === module) {
  precompileAssets().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
