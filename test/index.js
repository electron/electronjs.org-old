require('make-promises-safe')
const {before, describe, it} = require('mocha')
const supertest = require('supertest')
const cheerio = require('cheerio')
const chai = require('chai')
chai.should()
chai.use(require('chai-cheerio'))
const app = require('../server.js')

function get (route) {
  return supertest(app).get(route)
    .then(res => {
      res.$ = cheerio.load(res.text)
      return Promise.resolve(res)
    })
}

describe('electron.atom.io', () => {
  // wait until jexodus is done
  before(function (done) {
    let interval
    this.timeout(10 * 1000)
    function handler () {
      if (app.bootstrapped) {
        clearInterval(interval)
        return done()
      }
    }
    handler()
    interval = setInterval(handler, 100)
  })

  describe('/ (a static route)', () => {
    let res, $

    before(done => {
      get('/').then(_res => {
        res = _res
        $ = res.$
        done()
      })
    })

    it('renders the header', () => {
      $('header').should.have.class('site-header')
    })

    it('renders localized content', () => {
      $('p.jumbotron-lead').should.contain('Build cross platform desktop apps')
    })

    it('includes 24 featured apps', () => {
      $('.featured-app').length.should.equal(24)
    })
  })

  describe('/apps', () => {
    let res, $

    before(done => {
      get('/apps').then(_res => {
        res = _res
        $ = res.$
        done()
      })
    })

    it('includes lots of apps', () => {
      $('.listed-app').length.should.be.above(300)
    })
  })

  it('redirects trailing slashes', (done) => {
    supertest(app).get('/apps/')
      .expect(301)
      .then(res => {
        res.headers.location.should.equal('/apps')
        done()
      })
  })

  describe('/docs/api/app (a dynamic route)', () => {
    let res, $

    before(done => {
      get('/docs/api/app').then(_res => {
        res = _res
        $ = res.$
        done()
      })
    })

    it('includes the header', () => {
      $('header').should.have.class('site-header')
    })

    it('sets page title')
  })

  // describe('apps', () => {
  //   it('has a JSON file full of app metadata')
  //   it('has a PNG image file for every app icon')
  //   it('limits featured app count to 24')
  // })

  // describe('docs', () => {
  //   it('rewrites relative links')
  //   it('properly handles multiple links on a single line')
  //   it('leaves absolute links intact')
  //   it('leaves fragment links intact')
  //   it('preserves fenced js code snippets')
  //   it('HTML-encodes pipe characters to avoid confusing the jekyll kramdown parser')
  //   it('adds a warning comment so people know to edit docs on the electron/electron repo')

  //   describe('frontmatter', () => {
  //     it('has a semver version')
  //     it('has a permalink')
  //     it('has a category')
  //     it('has a redirect_from array')
  //     it('includes a redirect for `latest`')
  //     it('includes custom redirects')
  //     it('has a source_url')
  //     it('has a title')
  //     it('has a sort_title')
  //     it('has an excerpt')
  //   })
  // })

  // describe('versions', () => {
  //   it('is an array of release data (from S3)')
  //   it('includes a valid semver version number in each object')
  //   it('is sorted with highest version number first (not necessarily the latest)')
  // })

  // describe('releases', () => {
  //   it('is an array of release data from the GitHub API')
  //   it('always has a version')
  //   it('always has an html_url')
  //   it('always has a created_at timestamp')
  //   it('does not include prerelease versions')
  //   it('does not include draft versions')
  //   it('is sorted with newer releases first')
  //   it('converts hashtagged issues and PR ids to hyperlinks')
  // })

  // describe('userland', () => {
  //   it('defines required properties')
  //   it('defines an template for each report')
  // })
})
