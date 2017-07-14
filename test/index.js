require('make-promises-safe')
const {before, describe, it} = require('mocha')
const test = it
const supertest = require('supertest')
const cheerio = require('cheerio')
const chai = require('chai')
chai.should()
chai.use(require('chai-cheerio'))
const app = require('../server.js')

function get (route) {
  return supertest(app).get(route)
    .then(res => {
      const $ = cheerio.load(res.text)
      $.res = Object.assign({}, res)
      return Promise.resolve($)
    })
}

describe('electron.atom.io', () => {
  before(function (done) {
    // wait until jexodus is done
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

  test('/', (done) => {
    get('/').then($ => {
      // layout is working
      $('header').should.have.class('site-header')

      // localized content
      $('p.jumbotron-lead').should.contain('Build cross platform desktop apps')

      // 24 featured apps
      $('.featured-app').length.should.equal(24)

      done()
    })
  })

  test('/apps', (done) => {
    get('/apps').then($ => {
      // long list of apps
      $('.listed-app').length.should.be.above(300)
      $('.category-list li').length.should.be.above(15)
    })
    get('/apps?category=games').then($ => {
      // apps for category
      $('.listed-app').length.should.be.above(15)
      $('#category-games.selected').length.should.equal(1)
      done()
    })
  })

  test('/docs/api/app', (done) => {
    get('/docs/api/app').then($ => {
      // layout is working
      $('header').should.have.class('site-header')

      // localized content
      // TODO

      // page title
      // TODO
      done()
    })
  })

  test('/blog', (done) => {
    get('/blog').then($ => {
      // layout is working
      $('header').should.have.class('site-header')

      // localized content
      // TODO

      // page title
      // TODO

      // list of posts

      done()
    })
  })

  // test('/blog/webtorrent', (done) => {
  //   get('/blog/webtorrent').then($ => {
  //     // layout is working
  //     $('header').should.have.class('site-header')

  //     // post title is page title
  //     // TODO

  //     // old /blog/YYYY/MM/DD format URLs')
  //     // https://electron.atom.io/blog/2017/06/01/typescript

  //     done()
  //   })
  // })

  test('redirects trailing slashes', (done) => {
    supertest(app).get('/apps/')
      .expect(301)
      .then(res => {
        res.headers.location.should.equal('/apps')
        done()
      })
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
