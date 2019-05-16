const shuffle = require('knuth-shuffle-seeded')
const apps = require('../lib/apps')
const featuredCompanies = require('../lib/featured-companies')

module.exports = (req, res) => {
  const randomizedApps = shuffle(apps.slice())
  const context = Object.assign(req.context, {
    companies: featuredCompanies,
    apps: randomizedApps.slice(0, 25)
  })

  res.render('home', context)
}
