const Feed = require('feed').Feed

module.exports = new Feed({
  title: 'Electron',
  description:
    'Build cross platform desktop apps with JavaScript, HTML, and CSS.',
  id: 'https://electronjs.org/',
  link: 'https://electronjs.org/',
  generator: 'Electron website',
  feedLinks: {
    json: 'https://electronjs.org/releases.json',
    atom: 'https://electronjs.org/releases.xml',
    json1: 'https://electronjs.org/blog.json',
    atom1: 'https://electronjs.org/blog.xml'
  }
})
