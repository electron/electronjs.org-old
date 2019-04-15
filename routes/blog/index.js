const yubikiri = require('yubikiri')
const BlogPost = require('../../lib/blog')

function hydrateViewModel (blogPost) {
  return yubikiri({
    title: blogPost.title(),
    href: blogPost.href(),
    date: blogPost.date(),
    authors: blogPost.authors(),
    excerpt: blogPost.excerpt()
  })
}

module.exports = async (req, res) => {
  const blogPosts = await BlogPost.getAll()
  const posts = await Promise.all(blogPosts.map(hydrateViewModel))
  const postsInOrder = posts.sort((a, b) => b.date.localeCompare(a.date))
  Object.assign(req.context, { posts: postsInOrder })
  res.render('blog/index', req.context)
}
