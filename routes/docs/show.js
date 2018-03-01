const i18n = require('../../lib/i18n')
const {get: getProp} = require('lodash')

module.exports = (req, res, next) => {
  const doc = i18n.docs[req.language][req.path]
  const docEn = req.context.currentLocale.startsWith('en')
                ? null : i18n.docs['en-US'][req.path]
  if (!doc) return next()
  
  // Crowdin's undocumented mystery locale URL format. See https://git.io/vADu0
  // e.g. `zh-CN` -> `zhcn`
  const crowdinLanguageCode = getProp(i18n, `locales.${req.context.currentLocale}.stats.code`)
    .toLowerCase().replace('-', '') 

  doc.crowdinUrl = crowdinLanguageCode
    ? `https://crowdin.com/translate/electron/${doc.crowdinFileId}/en-${crowdinLanguageCode}`
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
