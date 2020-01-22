const shuffle = require('knuth-shuffle-seeded')
const apps = require('../lib/apps')
const featuredCompanies = require('../lib/featured-companies')

const showAnnounceBanner = new Date() < new Date(2020, 1, 1)

module.exports = (req, res) => {
  const randomizedApps = shuffle(apps.slice())
  const context = Object.assign(req.context, {
    companies: featuredCompanies,
    apps: randomizedApps.slice(0, 25),
    showAnnounceBanner,
  })

  res.render('home', context)
}
