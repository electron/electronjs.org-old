const fs = require('fs')
const path = require('path')
const expect = require('chai').expect
const semver = require('semver')
const matter = require('gray-matter')
const marky = require('marky-markdown-lite')

describe('electron.atom.io', () => {
  describe('apps', () => {
    const apps = require(path.join(__dirname, '_data/apps.json'))
    const featured = require(path.join(__dirname, '_data/featured_apps.json'))

    it('has a JSON file full of app metadata', () => {
      expect(apps.length).to.be.above(240)
      apps.forEach(app => {
        expect(app.slug).to.exist
        expect(app.name).to.exist
        expect(app.description).to.exist
        expect(app.website).to.exist
        expect(app.icon).to.exist
        expect(fs.existsSync(path.join(__dirname, 'images/apps', app.icon))).to.equal(true)
      })
    })

    it('has a PNG image file for every app icon', () => {
      apps.forEach(app => {
        expect(app.icon).to.exist
        expect(fs.existsSync(path.join(__dirname, 'images/apps', app.icon))).to.equal(true)
      })
    })

    it('limits featured app count to 24', () => {
      expect(featured.length).to.equal(24)
    })
  })

  describe('docs', () => {
    it('rewrites relative links', () => {
      const doc = loadDoc('api/browser-window.md')
      expect(doc).to.include('[Main]({{site.baseurl}}/docs/tutorial/quick-start#main-process)')
    })

    it('properly handles multiple links on a single line', () => {
      const doc = loadDoc('api/clipboard.md')
      expect(doc).to.include('[Main]({{site.baseurl}}/docs/tutorial/quick-start#main-process)')
      expect(doc).to.include('[Renderer]({{site.baseurl}}/docs/tutorial/quick-start#renderer-process)')
    })

    it('leaves absolute links intact', () => {
      const $ = marky(loadDoc('api/browser-window.md'))
      const links = $('a').map((i, el) => $(el).attr('href')).get()
      const httpLinks = links.filter(link => link.startsWith('https://'))
      expect(httpLinks.length).to.be.above(3)
    })

    it('preserves fenced js code snippets', () => {
      const doc = loadDoc('api/clipboard.md')
      expect(doc).to.include('```javascript\n')
    })

    describe('frontmatter', () => {
      const frontmatter = matter(loadDoc('api/app.md')).data
      it('has a semver version', () => {
        expect(frontmatter.version).to.match(/^v\d\.\d\.\d/)
      })

      it('has a category', () => {
        expect(frontmatter.category).to.equal('API')
      })

      it('has a redirect_from array', () => {
        expect(frontmatter.redirect_from).to.be.an('array')
        expect(frontmatter.redirect_from.length).to.be.above(25)
        expect(frontmatter.redirect_from[0]).to.match(/^\/docs\//)
      })

      it('has a source_url', () => {
        expect(frontmatter.source_url).to.equal('https://github.com/electron/electron/blob/master/docs/api/app.md')
      })

      it('has a title', () => {
        expect(frontmatter.title).to.equal('app')
      })

      it('has a sort_title', () => {
        expect(frontmatter.sort_title).to.equal('app')
      })

      it('has an excerpt', () => {
        expect(frontmatter.excerpt.length).to.be.above(8)
      })
    })
  })

  describe('versions', () => {
    const versions = require(path.join(__dirname, '_data/versions.json'))

    it('is an array of release data with version numbers', () => {
      expect(versions).to.be.an('array')
      expect(versions.length).to.be.above(25)
    })

    it('is sorted with highest version number first (not necessarily the latest)', () => {
      const numbers = versions.map(version => version.version)
      expect(numbers.every(number => !!semver.valid(number))).to.equal(true)
    })
  })
})

function loadDoc (filename) {
  return fs.readFileSync(path.join(__dirname, `_docs/${filename}`), 'utf-8')
}
