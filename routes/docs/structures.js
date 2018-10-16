const processes = require('../../data/processes.json')
const i18n = require('../../lib/i18n')
const singlePage = require('./show')

module.exports = (req, res, next) => {
  const doc = i18n.docs[req.language][req.path]
  if (doc) {
    return singlePage(req, res, next)
  }

  let context = Object.assign(req.context, {
    page: {
      title: 'API Structures | Electron'
    },
    layout: 'docs',
    processes: processes,
    category: 'API / API Structures'
  })

  res.render('docs/structures', context)
}
