const markdownToHtml = require('electron-markdown')
const graymatter = require('gray-matter')
const fs = require('fs-extra')
const path = require('path')

function parseMarkdown (markdown) {
  // Using unsafe options as we trust the blog content from this repo
  return markdownToHtml(markdown, {
    unsafe: true,
    extensions: {
      tagfilter: false
    }
  })
}

const POSTS_PATH = path.join(__dirname, '..', 'data', 'blog')
class BlogPost {
  static async getAll () {
    const files = await fs.readdir(POSTS_PATH)
    const slugs = files.map(file => path.basename(file, '.md'))
    return slugs.map(BlogPost.get)
  }

  static get (slug) {
    return new BlogPost(slug)
  }

  constructor (slug) {
    this._cache = new Map()
    this._slug = slug
  }

  exists () {
    return fs.exists(path.join(POSTS_PATH, this.filename()))
  }

  async cache (key, computation) {
    if (this._cache.has(key)) {
      return this._cache.get(key)
    } else {
      const value = await computation()
      this._cache.set(key, value)
      return value
    }
  }

  _getRawMarkdown () {
    const fullPath = path.join(POSTS_PATH, this.filename())
    return this.cache('_getRawMarkdown', () => fs.readFile(fullPath))
  }

  async _frontmatter () {
    const markdown = await this._getRawMarkdown()
    return this.cache('frontmatter', () => {
      return graymatter(markdown, {
        excerpt: true,
        excerpt_separator: '---'
      })
    })
  }

  async frontmatter (key) {
    const fm = await this._frontmatter()
    return fm.data[key]
  }

  slug () {
    return this._slug
  }

  filename () {
    return `${this.slug()}.md`
  }

  title () {
    return this.frontmatter('title')
  }

  date () {
    return this.frontmatter('date')
  }

  href () {
    return `/blog/${this.slug()}`
  }

  async authors () {
    const authors = await this.frontmatter('author')
    return Array.isArray(authors) ? authors : [authors]
  }

  async excerpt () {
    const { excerpt } = await this._frontmatter()
    return this.cache('excerpt', () => parseMarkdown(excerpt))
  }

  async content () {
    const { content } = await this._frontmatter()
    return this.cache('content', () => parseMarkdown(content))
  }
}

module.exports = BlogPost
