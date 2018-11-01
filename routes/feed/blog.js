const feed = require('./mainFeed')
const description = require('description')

// Feed for Blog
module.exports = function feedHandler (req, res, next) {
  req.context.posts.forEach(function (post) {
    feed.addItem({
      id: `https://electronjs.org${post.href}`,
      title: post.title,
      content: post.content,
      description: description({ content: post.content, endWith: '[...]', limit: 200 }),
      link: `https://electronjs.org${post.href}`,
      date: new Date(post.date),
      published: new Date(post.date),
      author: post.author,
      image: post.image || 'https://electronjs.org/images/opengraph.png'
    })
  })

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
