const yubikiri = require('yubikiri')
const BlogPost = require('../../lib/blog')

function hydrateViewModel (blogPost) {
  return yubikiri({
    title: blogPost.title(),
    href: blogPost.href(),
    date: blogPost.date(),
    authors: blogPost.authors(),
    excerpt: blogPost.excerpt(),
    content: blogPost.content()
  })
}

module.exports = async (req, res, next) => {
  const blogPost = BlogPost.get(req.params.slug)
  const exists = await blogPost.exists()
  if (!exists) {
    return next()
  }

  const post = await hydrateViewModel(blogPost)

  // redirect /blog/2016/09/27/foo to /blog/foo
  if (req.path !== post.href) {
    return res.redirect(post.href)
  }

  Object.assign(req.context, {
    post: post,
    layout: 'post',
    page: { title: `${post.title} | Electron Blog` }
  })
  res.render('blog/show', req.context)
}
