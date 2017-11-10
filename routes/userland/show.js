const fs = require('fs')
const path = require('path')

module.exports = (req, res, next) => {
  const currentReport = req.params[0]
  const reportPath = path.resolve(`data/userland/${currentReport}.json`)
  if (!fs.existsSync(reportPath)) return next()
  const report = require(reportPath)
  let blacklist

  report.isPackage = report.collectionType === 'Package'
  report.isRepository = report.collectionType === 'Repository'
  report.isnpmUser = report.collectionType === 'npmUser'
  report.isGitHubUser = report.collectionType === 'GithubUser'

  if (report.isGitHubUser) {
    blacklist = [
      'greenkeeperio-bot',
      'ember-tomster',
      'gitter-badger',
      'invalid-email-address',
      'waffle-iron'
    ]
  } else if (report.isnpmUser) {
    blacklist = [
      'uupaa',
      'etc-etc-etc'
    ]
  }

  const context = Object.assign(req.context, {
    report: report,
    items: report.collection,
    blacklist: blacklist,
    page: {
      title: `${report.title} | Electron`
    }
  })

  res.render('userland/show', context)
}
