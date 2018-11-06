const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const postsPath = path.resolve(__dirname, '..', 'data', 'blog')

const files = []

const i18nVersion = require('electron-i18n/package.json').version
const releasesVersion = require('electron-releases/package.json').version
const { docs, website } = require('electron-i18n')

for (const docPath of Object.keys(docs['en-US'])) {
  files.push({
    url: docPath,
    revision: i18nVersion
  })
}

for (const sitePath of Object.keys(website['en-US'].pages)) {
  files.push({
    url: sitePath,
    revision: `${i18nVersion}-${releasesVersion}`
  })
}

for (const post of fs.readdirSync(postsPath)) {
  const hash = crypto.createHash('SHA256')
    .update(fs.readFileSync(path.resolve(postsPath, post)))
    .digest('base64')

  files.push({
    url: `/blog/${path.basename(post, '.md')}`,
    revision: hash
  })
}

const content = `self.precache = ${JSON.stringify(files)}`

const hash = crypto.createHash('SHA1').update(content).digest('hex')
const targetPath = path.resolve(__dirname, '..', 'scripts', `precache.${hash}.js`)

fs.writeFileSync(
  targetPath,
  content
)

fs.writeFileSync(
  path.resolve(__dirname, '..', 'scripts', 'service-worker.js'),
  fs.readFileSync(
    path.resolve(__dirname, '..', 'scripts', 'service-worker.tmpl.js'),
    'utf8'
  ).replace('{PRE_HASH}', hash)
)
