const i18n = require('../../lib/i18n')
const editorCodes = require('crowdin-editor-language-codes')

module.exports = (req, res, next) => {
  const doc = i18n.docs[req.language][req.path]
  const docEn = req.context.currentLocale.startsWith('en')
    ? null : i18n.docs['en-US'][req.path]
  if (!doc) return next()

  // Crowdin's undocumented mystery locale URL format. See https://git.io/vADu0
  // e.g. `zh-CN` -> `zhcn`
  const { languageCode } = i18n.locales[req.context.currentLocale] || {}
  const { editorCode } = editorCodes[languageCode] || {}

  doc.crowdinUrl = editorCode
    ? `https://crowdin.com/translate/electron/${doc.crowdinFileId}/en-${editorCode}`
    : 'https://crowdin.com/project/electron'

  const context = Object.assign(req.context, {
    doc: doc,
    docEn: docEn,
    page: {
      title: `${doc.title} | Electron`,
      description: doc.description,
      url: req.url
    },
    layout: 'docs'
  })

  res.render('docs/show', context)
}
