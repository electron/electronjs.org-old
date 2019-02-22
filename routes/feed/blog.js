const { setupFeed } = require('./mainFeed')
const BlogPost = require('../../lib/blog')

module.exports = async function feedHandler (req, res, next) {
  const feed = await setupFeed('blog', await BlogPost.getAll())

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
