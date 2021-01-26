const { getAllPosts } = require('../../lib/blog')

let postsInOrder = []

module.exports = async (req, res) => {
  if (postsInOrder.length === 0) {
    const blogPosts = await getAllPosts()
    const posts = Array.from(blogPosts.values())
    postsInOrder = posts.sort((a, b) => b.date.localeCompare(a.date))
  }

  Object.assign(req.context, {
    posts: postsInOrder,
  })
  res.render('blog/index', req.context)
}
