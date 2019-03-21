const shuffle = require('knuth-shuffle-seeded')
const apps = require('../lib/apps')

module.exports = (req, res) => {
  const randomizedApps = shuffle(apps.slice())
  const context = Object.assign(req.context, {
    apps: randomizedApps.slice(0, 24)
  })

  res.render('home', context)
}
