const { getPost } = require('../../lib/blog')

module.exports = async (req, res, next) => {
  const post = await getPost(req.params.slug)

  if (!post) {
    return next()
  }

  // redirect /blog/2016/09/27/foo to /blog/foo
  if (req.path !== post.href) {
    return res.redirect(post.href)
  }

  Object.assign(req.context, {
    post: post,
    layout: 'post',
    page: { title: `${post.title} | Electron Blog` },
  })
  res.render('blog/show', req.context)
}
