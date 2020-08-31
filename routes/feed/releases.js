const memoize = require('fast-memoize')

const { setupFeed } = require('./mainFeed')

const VALID_TYPES = new Set(['stable', 'beta', 'nightly'])

const getReleasesForTypes = memoize((all, queryTypes) => {
  const releases = []
  const types = queryTypes.split(',')
  for (const type of types) {
    if (!VALID_TYPES.has(type)) continue

    releases.push(
      ...all.filter((r) => {
        switch (type) {
          case 'stable':
            return r.isStable()
          case 'beta':
            return r.isBeta()
          case 'nightly':
            return r.isNightly()
        }
        return false
      })
    )
  }

  return releases
})

module.exports = async function feedHandler(req, res, next) {
  const { types } = req.query
  let releases = req.context.releases.all
  if (types) {
    releases = getReleasesForTypes(releases, types)
  }

  const feed = await setupFeed('releases', releases)

  if (req.path === '/releases.xml') {
    res.set('content-type', 'text/xml')
    res.send(feed.atom1())
  } else if (req.path === '/releases.json') {
    res.json(JSON.parse(feed.json1()))
  } else {
    return next()
  }
}
