const releases = require('../data/releases.json')

module.exports = (req, res) => {
  const context = Object.assign(req.context, {
    releases: releases,
    page: {
      title: 'Releases | Electron'
    }
  })

  res.render('releases', context)
}
