const markdownToHtml = require('electron-markdown')
const i18n = require('../lib/i18n')
const graymatter = require('gray-matter')
const fs = require('fs-extra')
const path = require('path')

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

const POSTS_PATH = path.join(__dirname, '..', 'data', 'blog')
class BlogPost {
  static async getAll(language) {
    const files = await fs.readdir(POSTS_PATH)
    const slugs = files.map((file) => path.basename(file, '.md'))
    return slugs.map((slug) => BlogPost.get(slug, language))
  }

  static get(slug, language) {
    return new BlogPost(slug, language)
  }

  constructor(slug, language) {
    this._cache = new Map()
    this._slug = slug
    this._language = language
  }

  exists() {
    return fs.exists(path.join(POSTS_PATH, this.filename()))
  }

  async cache(key, computation) {
    if (this._cache.has(key)) {
      return this._cache.get(key)
    } else {
      const value = await computation()
      this._cache.set(key, value)
      return value
    }
  }

  _getRawMarkdown() {
    // This block looks not very good, but they give confidence,
    // and security that we do not get the crash when the content
    // not synchronized in the i18n, e.g. when we publish a new post,
    // languages that don't have the copy on the own language get the
    // version from the disk.
    //
    // Why not use the English version from the i18n module?
    // We get the desync between this repo and i18n, the save
    // and simple way it's using the good saved copy from the disk.
    //
    // drink some water, be kind to yourself and others.
    if (this._language) {
      const blog = i18n.blogs[this._language][this.href()]
      if (blog) {
        return this.cache('_getRawMarkdown', () => blog.content)
      }
    }

    const fullPath = path.join(POSTS_PATH, this.filename())
    return this.cache('_getRawMarkdown', () => fs.readFile(fullPath))
  }

  async _frontmatter() {
    const markdown = await this._getRawMarkdown()
    return this.cache('frontmatter', () => {
      return graymatter(markdown, {
        excerpt: true,
        excerpt_separator: '---',
      })
    })
  }

  async frontmatter(key) {
    const fm = await this._frontmatter()
    return fm.data[key]
  }

  slug() {
    return this._slug
  }

  filename() {
    return `${this.slug()}.md`
  }

  title() {
    return this.frontmatter('title')
  }

  date() {
    return this.frontmatter('date')
  }

  href() {
    return `/blog/${this.slug()}`
  }

  async authors() {
    const authors = await this.frontmatter('author')
    return Array.isArray(authors) ? authors : [authors]
  }

  async excerpt() {
    const { excerpt } = await this._frontmatter()
    return this.cache('excerpt', () => parseMarkdown(excerpt))
  }

  async content() {
    const { content } = await this._frontmatter()
    return this.cache('content', () => parseMarkdown(content))
  }
}

module.exports = BlogPost
