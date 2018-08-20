const feed = require('./mainFeed')

module.exports = function feedHandler (req, res, next) {
  req.context.releases.forEach(function (releases) {
    feed.addItem({
      id: `https://electronjs.org/releases#${releases.version}`,
      date: new Date(releases.created_at),
      link: releases.html_url,
      content: releases.body_html
    })
  })

  if (req.path === '/releases.xml') {
    res.set('content-type', 'text/xml')
    res.send(feed.atom1())
  } else if (req.path === '/releases.json') {
    res.json(JSON.parse(feed.json1()))
  } else {
    return next()
  }
}
