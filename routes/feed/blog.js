const { setupFeed } = require('./mainFeed')
const blog = require('../../lib/blog')

module.exports = async function feedHandler (req, res, next) {
  const feed = setupFeed('blog', await blog.getPosts(true))

  if (req.path === '/blog.xml') {
    res.set('content-type', 'text/xml')
    res.send(feed.atom1())
  } else if (req.path === '/blog.json') {
    res.set('content-type', 'application/json')
    res.json(JSON.parse(feed.json1()))
  } else {
    return next()
  }
}
