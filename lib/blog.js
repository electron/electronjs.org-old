const markdownToHtml = require('electron-markdown')
const graymatter = require('gray-matter')
const fs = require('fs-extra')
const path = require('path')

const blogPosts = new Map()
const POSTS_PATH = path.join(__dirname, '..', 'data', 'blog')

/**
 * @param {string} markdown
 * @returns {Promise<string>}
 */
function parseMarkdown(markdown) {
  // Using unsafe options as we trust the blog content from this repo
  return markdownToHtml(markdown, {
    cmark: {
      unsafe: true,
      extensions: {
        tagfilter: false,
      },
    },
  })
}

/**
 * @param {string} markdown
 * @returns {graymatter.GrayMatterFile<string>}
 */
function parseFrontMatter(markdown) {
  return graymatter(markdown, {
    excerpt: true,
    excerpt_separator: '---',
  })
}

/**
 * @returns {Map}
 */
async function getAllPosts() {
  if (blogPosts.size !== 0) {
    return blogPosts
  }

  const files = await fs.readdir(POSTS_PATH)
  const slugs = files.map((file) => path.basename(file, '.md'))

  for (const slug of slugs) {
    blogPosts.set(slug, await loadPost(slug))
  }

  return blogPosts
}

/**
 * @param {string} slug
 */
async function loadPost(slug) {
  let markdown = await fs.readFile(path.join(POSTS_PATH, `${slug}.md`))

  const frontmatter = parseFrontMatter(markdown)
  const authors = Array.isArray(frontmatter.data.author)
    ? frontmatter.data.author
    : [frontmatter.data.author]

  const post = {
    title: frontmatter.data.title,
    href: `/blog/${slug}`,
    date: frontmatter.data.date,
    authors,
    excerpt: await parseMarkdown(frontmatter.excerpt),
    content: await parseMarkdown(frontmatter.content),
  }

  return post
}

/**
 * @param {string} slug
 */
async function getPost(slug) {
  return (await getAllPosts()).get(slug)
}

module.exports = {
  getAllPosts,
  getPost,
}
