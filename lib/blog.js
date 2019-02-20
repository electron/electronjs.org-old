const markdownToHtml = require('electron-markdown')
const graymatter = require('gray-matter')
const fs = require('fs-extra')
const path = require('path')

const postsPath = path.join(__dirname, '..', 'data', 'blog')

const postsPromise = Promise.all(fs.readdirSync(postsPath).map(postMetadata))
  .then(posts => posts.sort((a, b) => b.date.localeCompare(a.date)))
postsPromise.catch(err => {
  console.error(`Error loading posts: ${err}`)
})

function parseMarkdown (markdown) {
  // Using unsafe options as we trust the blog content from this repo
  return markdownToHtml(markdown, {
    unsafe: true,
    excludeExtensions: ['tagfilter']
  })
}

function getPostMarkdown (filename) {
  return fs.readFile(path.join(postsPath, filename), 'utf8')
}

function parseGraymatter (markdown) {
  return graymatter(markdown, {
    excerpt: true,
    excerpt_separator: '---'
  })
}

async function postMetadata (filename) {
  const slug = path.basename(filename, '.md')
  const href = `/blog/${slug}`
  const markdown = await getPostMarkdown(filename)
  const { data, excerpt } = parseGraymatter(markdown)
  let excerptHtml = ''
  if (excerpt && excerpt.length) {
    excerptHtml = await parseMarkdown(excerpt)
  }
  const { date, author, title } = data
  const authors = Array.isArray(author) ? author : [author]

  return { filename, title, slug, href, date, excerpt: excerptHtml, author: authors }
}

async function getPosts (includeContent = false) {
  const posts = await postsPromise
  if (includeContent) {
    for (let post of posts) {
      const markdown = await getPostMarkdown(post.filename)
      const { content } = parseGraymatter(markdown)
      post.content = await parseMarkdown(content)
    }
  }
  return posts
}

async function getPost (slug) {
  const posts = await getPosts()
  const post = posts.find(p => p.slug === slug)
  if (!post) {
    throw new Error(`Post with slug ${slug} not found`)
  }

  const markdown = await getPostMarkdown(post.filename)
  const { content } = parseGraymatter(markdown)
  post.content = await parseMarkdown(content)
  return post
}

module.exports = {
  getPosts: getPosts,
  getPost: getPost
}
