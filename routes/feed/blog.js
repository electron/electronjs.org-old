/// <reference path="../../node_modules/feed/lib/types/index.d.ts" />

const Feed = require('feed').Feed
const description = require('description')

module.exports = function feedHandler (req, res, next) {
  let feed = new Feed({
    title: 'Electron',
    description: 'Build cross platform desktop apps with JavaScript, HTML, and CSS.',
    id: 'https://electronjs.org/',
    link: 'https://electronjs.org/',
    generator: 'Electron website',
    feedLinks: {
      json: 'https://electronjs.org/blog.json',
      atom: 'https://electronjs.org/blog.xml'
    }
  })

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
