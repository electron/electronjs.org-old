const { setupFeed } = require('./mainFeed')

module.exports = function feedHandler (req, res, next) {
  const feed = setupFeed('releases', req.context.releases.all)

  if (req.path === '/releases.xml') {
    res.set('content-type', 'text/xml')
    res.send(feed.atom1())
  } else if (req.path === '/releases.json') {
    res.json(JSON.parse(feed.json1()))
  } else {
    return next()
  }
}
