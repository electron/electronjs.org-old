// At startup, this module converts all the blog posts from markdown to HTML.
// At runtime, it's a middleware that serves up blog routes.

const hubdown = require('hubdown')
const path = require('path')
const fs = require('fs')
const postsPath = path.join(__dirname, '../data/blog')
let posts

Promise.all(fs.readdirSync(postsPath).map(parsePost)).then(_posts => {
  posts = _posts.sort((a, b) => b.date.localeCompare(a.date))
})

async function parsePost (filename) {
  const markdown = fs.readFileSync(path.join(postsPath, filename), 'utf8')
  const post = {}
  post.slug = path.basename(filename, '.md')
  post.href = `/blog/${post.slug}`
  post.href2 = null
  Object.assign(post, await hubdown(markdown, { frontmatter: true }))
  Object.assign(post, { excerpt: post.content.split('<hr>')[0] })
  if (!post.date) throw new Error(`${filename} is missing a date attribute`)
  let [year, month, day] = post.date.split('-')
  post.href2 = `/blog/${year}/${month}/${day}/${post.slug}`
  if (!Array.isArray(post.author)) { post.author = [post.author] }
  post.author = post.author.map(a => { return { name: a } })
  const imageRegex = /<img[^>]+src="?([^"\s]+)"?[^>]*>/g
  let imageCatch = imageRegex.exec(post.content)
  if (imageCatch) post.image = imageCatch[1]
  return post
}

module.exports = function blogHandler (req, res, next) {
  const isFeed = ['/blog.xml', '/blog.json'].indexOf(req.path) > -1
  if (!(req.path.startsWith('/blog') || isFeed)) return next()

  const context = Object.assign(req.context, { posts: posts })

  if (req.path === '/blog') {
    return res.render('posts/index', context)
  }
  if (isFeed) return next()

  // redirect /blog/2016/09/27/foo to /blog/foo
  const parts = req.path.split('/')
  if (parts.length > 3) {
    const slug = parts[parts.length - 1]
    return res.redirect(`/blog/${slug}`)
  }

  context.post = posts.find(post => post.href === req.path)

  if (!context.post) return next()

  res.render('posts/show', Object.assign(context, {
    layout: 'post',
    page: { title: `${context.post.title} | Electron Blog` }
  }))
}
