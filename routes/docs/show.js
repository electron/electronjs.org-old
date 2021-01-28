const i18n = require('../../lib/i18n')
const editorCodes = require('crowdin-editor-language-codes')
const fs = require('fs')

module.exports = (req, res, next) => {
  const doc = i18n.docs[req.language][req.path]
  const docEn = req.context.currentLocale.startsWith('en')
    ? null
    : i18n.docs['en-US'][req.path]
  if (!doc) return next()

  // Crowdin's undocumented mystery locale URL format. See https://git.io/vADu0
  // e.g. `zh-CN` -> `zhcn`
  const { languageCode } = i18n.locales[req.context.currentLocale] || {}
  const { editorCode } = editorCodes[languageCode] || {}

  generateTableOfContents(doc)

  doc.crowdinUrl = editorCode
    ? `https://crowdin.com/translate/electron/${doc.crowdinFileId}/en-${editorCode}`
    : 'https://crowdin.com/project/electron'

  const context = Object.assign(req.context, {
    doc: doc,
    docEn: docEn,
    page: {
      title: `${doc.title} | Electron`,
      description: doc.description,
      url: req.url,
    },
    layout: 'docs',
  })

  res.render('docs/show', context)
}

function generateTableOfContents(doc) {
  const h1 = doc.sections[0]
  const toc = {
    name: h1.name,
    slug: h1.slug,
    level: h1.level,
    children: [],
  }

  let parent = toc
  let currLevel = 2

  for (const section of doc.sections.slice(1, doc.sections.length - 1)) {
    if (section.level === currLevel) {
      parent.children.push({
        name: section.name,
        slug: section.slug,
        level: section.level, // TODO: remove
        children: [],
      })
    } else if (section.level > currLevel) {
      parent = parent.children[parent.children.length - 1]
      parent.children.push({
        name: section.name,
        slug: section.slug,
        children: [],
      })
      currLevel++
    } else {
      parent = toc
      for (let i = 1; i < section.level - 1; i++) {
        parent = parent.children[parent.children.length - 1]
      }
      parent.children.push({
        name: section.name,
        slug: section.slug,
        children: [],
      })
      currLevel = section.level
    }
  }
  fs.writeFileSync('./hello.json', JSON.stringify(toc, null, 2))
  console.log(JSON.stringify(toc, null, 2))
}
