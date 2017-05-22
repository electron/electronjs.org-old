const fs = require('fs')
const path = require('path')
const expect = require('chai').expect
const requireDir = require('require-dir')
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
      expect(doc).to.include('[Main]({{site.baseurl}}/docs/glossary#main-process)')
    })

    it('properly handles multiple links on a single line', () => {
      const doc = loadDoc('api/clipboard.md')
      expect(doc).to.include('[Main]({{site.baseurl}}/docs/glossary#main-process)')
      expect(doc).to.include('[Renderer]({{site.baseurl}}/docs/glossary#renderer-process)')
    })

    it('leaves absolute links intact', () => {
      const $ = marky(loadDoc('api/browser-window.md'))
      const links = $('a').map((i, el) => $(el).attr('href')).get()
      const httpLinks = links.filter(link => link.startsWith('https://'))
      expect(httpLinks.length).to.be.above(3)
    })

    it('leaves fragment links intact', () => {
      const doc = loadDoc('api/menu-item.md')
      expect(doc).to.include('[roles](#roles)')
    })

    it('preserves fenced js code snippets', () => {
      const doc = loadDoc('api/clipboard.md')
      expect(doc).to.include('```javascript\n')
    })

    it('HTML-encodes pipe characters to avoid confusing the jekyll kramdown parser', () => {
      const doc = loadDoc('api/net.md')
      expect(doc).to.include('(Object &#124; String)')
    })

    it('adds a warning comment so people know to edit docs on the electron/electron repo', () => {
      const doc = loadDoc('api/browser-window.md')
      expect(doc).to.include('This file is generated automatically')
    })

    describe('frontmatter', () => {
      const frontmatter = matter(loadDoc('api/app.md')).data
      it('has a semver version', () => {
        expect(frontmatter.version).to.match(/^v\d\.\d\.\d/)
      })

      it('has a permalink', () => {
        expect(frontmatter.permalink).to.equal('/docs/api/app/')
      })

      it('has a category', () => {
        expect(frontmatter.category).to.equal('API')
      })

      it('has a redirect_from array', () => {
        expect(frontmatter.redirect_from).to.be.an('array')
        expect(frontmatter.redirect_from.length).to.be.above(10)
        expect(frontmatter.redirect_from[0]).to.match(/^\/docs\//)
      })

      it('includes a redirect for `latest`', () => {
        expect(frontmatter.redirect_from).to.include('/docs/latest/api/app/')
      })

      it('includes custom redirects', () => {
        expect(frontmatter.redirect_from).to.include('/docs/api/old-app-url/')
        expect(frontmatter.redirect_from).to.include('/docs/api/old-app-url2/')
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
    const numbers = versions.map(version => version.version)

    it('is an array of release data (from S3)', () => {
      expect(versions).to.be.an('array')
      expect(versions.length).to.be.above(25)
    })

    it('includes a valid semver version number in each object', () => {
      expect(numbers.every(number => !!semver.valid(number))).to.equal(true)
    })

    it('is sorted with highest version number first (not necessarily the latest)', () => {
      expect(numbers[0]).to.equal(semver.maxSatisfying(numbers, '*'))
      expect(numbers[numbers.length - 1]).to.equal(semver.minSatisfying(numbers, '*'))
    })
  })

  describe('releases', () => {
    const releases = require(path.join(__dirname, '_data/releases.json'))

    it('is an array of release data from the GitHub API', () => {
      expect(releases).to.be.an('array')
      expect(releases.length).to.be.above(25)
    })

    it('always has a version', () => {
      expect(releases.every(release => release.version.length > 1)).to.equal(true)
    })

    it('always has an html_url', () => {
      expect(releases.every(release => release.html_url.length > 1)).to.equal(true)
    })

    it('always has a created_at timestamp', () => {
      expect(releases.every(release => release.created_at.length > 1)).to.equal(true)
    })

    it('does not include prerelease versions', () => {
      expect(releases.every(release => release.prerelease === false)).to.equal(true)
    })

    it('does not include draft versions', () => {
      expect(releases.every(release => release.draft === false)).to.equal(true)
    })

    it('is sorted with newer releases first', () => {
      const versions = releases.map(release => release.version)
      expect(semver.maxSatisfying(versions, '*')).to.equal(versions[0])
      expect(semver.minSatisfying(versions, '*')).to.equal(versions[versions.length - 1])
    })

    it('converts hashtagged issues and PR ids to hyperlinks', () => {
      const release = releases.find(release => release.tag_name === 'v1.4.14')
      expect(release.body).to.include('<a href="https://github.com/electron/electron/pull/8341">#8341</a>')
      expect(release.body).to.include('<a href="https://github.com/electron/electron/pull/8371">#8371</a>')
    })
  })

  describe('userland', () => {
    const reports = requireDir(path.join(__dirname, '_data/userland'))
    const reportNames = Object.keys(reports)

    it('defines required properties', () => {
      reportNames.forEach(name => {
        const report = reports[name]
        expect(report.slug).to.be.a('string')
        expect(report.title).to.be.a('string')
        expect(report.description).to.be.a('string')
        expect(report.collectionType).to.be.a('string')
        expect(report.collection).to.be.an('array')
      })
    })

    it('defines an template for each report', () => {
      const templates = fs.readdirSync(path.join(__dirname, '_pages/userland'))
        .map(filename => path.basename(filename, '.html'))

      reportNames.forEach(name => {
        expect(templates).to.include(name, `expected template _pages/userland/${name}.html to exist`)
      })
    })
  })
})

function loadDoc (filename) {
  return fs.readFileSync(path.join(__dirname, `_docs/${filename}`), 'utf-8')
}
