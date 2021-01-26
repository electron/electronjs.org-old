const { setupFeed } = require('./mainFeed')
const { getAllPosts } = require('../../lib/blog')
let feed

module.exports = async function feedHandler(req, res, next) {
  if (!feed) {
    const posts = await getAllPosts()
    feed = await setupFeed('blog', Array.from(posts.values()))
  }

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
