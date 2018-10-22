const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const postsPath = path.resolve(__dirname, '..', 'data', 'blog')
const targetPath = path.resolve(__dirname, '..', 'scripts', 'precache.js')

const files = []

const i18nVersion = require('electron-i18n/package.json').version
const { docs, website } = require('electron-i18n')

for (const docPath of Object.keys(docs['en-US'])) {
  files.push({
    url: docPath,
    revision: i18nVersion,
  })
}

for (const sitePath of Object.keys(website['en-US'].pages)) {
  files.push({
    url: sitePath,
    revision: i18nVersion,
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

fs.writeFileSync(
  targetPath,
  `self.precache = ${JSON.stringify(files)}`
)

