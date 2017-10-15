module.exports = (req, res) => {
  const current_report = req.params[0]
  const report = require(`../../data/userland/${current_report}`)
  let blacklist;

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
      'waffle-iron',
    ]
  } else if (report.isnpmUser) {
    blacklist = [
      'uupaa',
      'etc-etc-etc',
    ]
  }

  const context = Object.assign(req.context, {
    report: report,
    items: report.collection,
    blacklist: blacklist
  })

  res.render('userland/show', context)
}
