const featuredCompanies = require('../lib/featured-companies')
const featuredApps = require('../lib/featured-apps')

module.exports = (req, res) => {
  const apps = [];
  Object.keys(featuredApps).forEach((k) => {
    // One app out of each category
    const category = featuredApps[k]
    const random = Math.floor(Math.random() * category.length);

    apps.push(category[random]);
  })

  const context = Object.assign(req.context, {
    companies: featuredCompanies,
    showAnnouncementBanner: false,
    apps
  })

  res.render('home', context)
}
