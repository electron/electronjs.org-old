const { setupFeed } = require('./mainFeed')
const memoize = require('fast-memoize')

module.exports = function feedHandler (req, res, next) {
  const cachedSetupFeed = memoize(setupFeed)
  const feed = cachedSetupFeed('releases', req.context.releases)

  if (req.path === '/releases.xml') {
    res.set('content-type', 'text/xml')
    res.send(feed.atom1())
  } else if (req.path === '/releases.json') {
    res.json(JSON.parse(feed.json1()))
  } else {
    return next()
  }
}
