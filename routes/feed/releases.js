const Feed = require('feed')
const description = require('description')

module.exports = function feedHandler (req, res, next) {
  let feed = new Feed({
    title: 'Electron',
    description: 'Build cross platform desktop apps with JavaScript, HTML, and CSS.',
    id: 'https://electronjs.org/',
    link: 'https://electronjs.org/',
    generator: 'Electron website',
    feedLinks: {
      json: 'https://electronjs.org/releases.json',
      atom: 'https://electronjs.org/releases.xml'
    }
  })
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
