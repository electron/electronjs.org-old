const releases = require('../data/releases.json')

module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    releases: releases
  })

  res.render('releases', context)
}
