const blog = require('../../lib/blog')

module.exports = async (req, res) => {
  const posts = await blog.getPosts()
  Object.assign(req.context, { posts })
  res.render('blog/index', req.context)
}
