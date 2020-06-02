const showAnnouncementBanner = require('../lib/showAnnouncementBanner')

module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    showAnnouncementBanner: showAnnouncementBanner,
  });

  res.render('donors', context)
}
