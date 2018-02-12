require('make-promises-safe')

const { describe, it, beforeEach, afterEach } = require('mocha')
const test = it
const supertest = require('supertest')
const session = require('supertest-session')
const nock = require('nock')
const cheerio = require('cheerio')
const chai = require('chai')
const i18n = require('../lib/i18n')
chai.should()
chai.use(require('chai-cheerio'))
const app = require('../server.js')

async function get (route) {
  const res = await supertest(app).get(route)
  const $ = cheerio.load(res.text)
  $.res = Object.assign({}, res)
  return $
}

describe('electronjs.org', () => {
  test('gzip enabled', async () => {
    const res = await supertest(app).get(`/`)
    res.headers['content-encoding'].should.equal('gzip')
  })

  test('blog feeds', async () => {
    let res = await supertest(app).get(`/blog.json`)
    res.headers['content-type'].should.equal('application/json; charset=utf-8')
    res.body.title.should.equal('Electron')
    res = await supertest(app).get(`/blog.xml`)
    res.headers['content-type'].should.equal('text/xml; charset=utf-8')
  })

  describe('404 pages', () => {
    test('404 path on page, detect a 404 path of page to create a issue', async () => {
      const $ = await get('/404-page-asdfgh')
      const path = '/404-page-asdfgh'
      $('.error-page .lead a').attr('href').should
        .eq(`https://github.com/electron/electronjs.org/issues/new?title=404%20for%20${path}&body=The%20following%20route%20is%20returning%20a%20404%20HTTP%20status%20code%3A%20${path}`)
    })
  })

  describe('stylesheets', () => {
    test('main stylesheet compiles', async () => {
      const res = await supertest(app).get('/styles/index.css')
      res.statusCode.should.eq(200)
    })
  })

  describe('homepage', () => {
    test('displays featured apps, version numbers, and CoC link', async () => {
      const $ = await get('/')
      $('header').should.have.class('site-header')
      $('p.jumbotron-lead').should.contain('Build cross platform desktop apps')
      $('.featured-app').length.should.equal(24)
      $('head > title').text().should.match(/^Electron/)

      // versions
      $('#electron-versions').text().should.match(/Electron: \d+\.\d+\.\d+/)
      $('#electron-versions').text().should.match(/Node: \d+\.\d+\.\d+/)
      $('#electron-versions').text().should.match(/Chromium: \d+\.\d+\.\d+\.\d+/)
      $('#electron-versions').text().should.match(/V8: \d+\.\d+\.\d+\.\d+/)

      // Footer
      $('a.footer-nav-item[href="https://github.com/electron/electron/tree/master/CODE_OF_CONDUCT.md"]')
        .text().should.eq('Code of Conduct')
    })
  })

  describe('apps', () => {
    test('index', async () => {
      const $ = await get('/apps')
      $('.listed-app').length.should.be.above(300)
      $('.category-list li').length.should.be.above(15)
    })

    test('index has custom title and description meta tags', async () => {
      const $ = await get('/apps')
      $('head > title').text().should.eq('Electron Apps | Electron')
      $('meta[property="og:description"]').attr('content').should.eq('Apps Built on Electron')
    })

    test('apps are sorted by date, descending', async () => {
      const $ = await get('/apps')
      const dates = $('.listed-app [data-date]')
        .map((i, el) => new Date($(el).text()))
        .get()

      const clone = dates.slice(0)
      dates.length.should.be.above(10)
      clone.sort((a, b) => new Date(b) - new Date(a)).should.deep.equal(dates)
    })

    test('index filtered by category', async () => {
      const $ = await get('/apps?category=games')
      $('.listed-app').length.should.be.above(15)
      $('#category-games.selected').length.should.equal(1)
    })

    test('app pages apply platform labels to download links', async () => {
      const $ = await get('/apps/hyper')
      $('a.app-download.darwin').length.should.be.above(0)
      $('a.app-download.linux').length.should.be.above(0)
      $('a.app-download.win32').length.should.be.above(0)
    })

    test('renders 404 for nonexistent apps', async () => {
      const $ = await get('/apps/nonexistent-app')
      $.res.status.should.eq(404)
      $('.error-page').text().should.include('Page not found')
    })
  })

  describe('docs', () => {
    test('index', async () => {
      const $ = await get('/docs')
      $('header').should.have.class('site-header')
      $('a[href="/docs/tutorial/about"]').should.have.text('About Electron')
      $('a[href="/docs/api/auto-updater"]').should.have.text('autoUpdater')
    })

    test('API doc', async () => {
      const $ = await get('/docs/api/browser-window')
      $('.docs-breadcrumbs a').should.have.length(4)
      $('.docs-breadcrumbs a[href="/docs/api"]').should.have.text('API')
      $('.docs-breadcrumbs')
        .text()
        .trim()
        .replace(/\n/g, '')
        .replace(/\s+/g, ' ')
        .should.include('Docs / API / BrowserWindow v')
    })

    test('redirects pre-1.0 docs URLs', async () => {
      let res = await supertest(app).get(`/docs/v0.20.0/api/app`)
      res.statusCode.should.equal(302)
      res.headers.location.should.equal('/docs/api/app')
      res = await supertest(app).get(`/docs/v0.20.0`)
      res.statusCode.should.equal(302)
      res.headers.location.should.equal('/docs')
    })

    test('uses page title and description', async () => {
      const $ = await get('/docs/api/browser-window')
      $('head > title').text().should.eq('BrowserWindow | Electron')
      $('meta[property="og:description"]').attr('content').should.eq('Create and control browser windows.')
    })

    test('docs/all', async () => {
      const $ = await get('/docs/all')
      $('head > title').text().should.eq('All the Electron Docs! | Electron')
      const titles = $('h1')
        .map((i, el) => $(el).text())
        .get()
      titles.should.include('BluetoothDevice Object') // API Structures
      titles.should.include('BrowserWindow') // API Docs
      titles.should.include('Application Distribution') // Tutorials
    })

    test('docs/api', async () => {
      const $ = await get('/docs/api')
      $('tr').length.should.be.above(10)
    })

    test('docs/glossary', async () => {
      const $ = await get('/docs/glossary')
      $('.error-page').length.should.eq(0)
    })

    test('docs/404', async () => {
      const $ = await get('/docs/404')
      $('.error-page').text().should.include('Page not found')
    })

    test('docs/api/404', async () => {
      const $ = await get('/docs/api/404')
      $('.error-page').text().should.include('Page not found')
    })

    test('docs footer', async () => {
      // includes a link to edit the doc
      const $ = await get('/docs/api/accelerator')
      $('.propose-change').attr('href').should.eq('https://github.com/electron/electron/tree/master/docs/api/accelerator.md')

      // TODO: test other docs footer links
    })

    test('doc history', async () => {
      const $ = await get('/docs/api/accelerator/history')
      // $('body').text().should.include('The Accelerator API was introduced in Electron v0.15.3')
      // $('head > title').text().should.eq('accelerator Version History | Electron')
      $('tr').length.should.be.above(10)
    })
  })

  describe('releases', () => {
    test('/releases', async () => {
      const $ = await get('/releases')
      $('h1').text().should.include('Releases')
      $('h2').length.should.be.above(35)

      const titles = $('h2 a').map((i, el) => $(el).text().trim()).get()
      titles.should.include('Electron 1.7.9')
      titles.should.include('Electron 1.6.7')
      titles.should.include('Electron 0.37.8')
    })

    test('/docs/versions redirects to /releases', async () => {
      const res = await supertest(app).get('/docs/versions')
      res.statusCode.should.be.equal(301)
      res.headers.location.should.equal('/releases')
    })
  })

  describe('userland', () => {
    test('userland/404', async () => {
      const $ = await get('/userland/404')
      $('.error-page').text().should.include('Page not found')
    })
  })

  test('/blog', async () => {
    const $ = await get('/blog')
    $('header').should.have.class('site-header')
    $('.posts-list li').length.should.be.above(10)
  })

  test('/blog/webtorrent', async () => {
    const $ = await get('/blog/webtorrent')
    $('header').should.have.class('site-header')
    // TODO: post title is page title
  })

  test('/awesome', async () => {
    const res = await supertest(app).get('/awesome')
    res.statusCode.should.be.above(300).and.below(303)
    res.headers.location.should.equal('/community')
  })

  describe('/community', () => {
    test('display lists of content from awesome-electron', async () => {
      const $ = await get('/community')
      $('h1').text().should.eq('Electron Community')

      const titles = $('h2').map((i, el) => $(el).text()).get()
      titles.should.include('Tools')
      titles.should.include('Components')
      titles.should.include('Meetups')
    })

    test('includes localized content', async() => {
      const res = await supertest(app)
        .get('/community')
        .set('Cookie', ['language=vi-VN'])
      const $ = cheerio.load(res.text)
      $('.subtron .container-narrow h1').text().should.eq(i18n.website['vi-VN'].community.title)
    })
  })

  describe('localized strings for client-side code', () => {
    it('sets meta tags for clipboard labels', async () => {
      const $ = await get('/')
      $('meta[name="localized.clipboard.copy"]').attr('content').should.eq('Copy')
      $('meta[name="localized.clipboard.copy_to_clipboard"]').attr('content').should.eq('Copy to Clipboard')
    })
  })

  describe('devtron and spectron', async () => {
    test('Test existed landing pages', async () => {
      let $ = await get('/devtron')
      $('.jumbotron-lead .jumbotron-lead-muted').text().should.eq('An Electron DevTools Extension')
      $ = await get('/spectron')
      $('.jumbotron-lead .jumbotron-lead-muted').text().should.eq('An Electron Testing Framework')
    })
  })

  describe('languages', () => {
    test('/languages', async () => {
      const $ = await get('/languages')
      $('h1').text().should.eq('Languages')
      $('body').text().should.include('global developer community')
    })

    test('language query param for one-off viewing in other languages', async () => {
      const frenchContent = 'fenêtres'
      const sesh = session(app)

      let res = await sesh.get('/docs/api/browser-window?lang=fr-FR')
      let $ = cheerio.load(res.text)
      $('blockquote').text().should.include(frenchContent)

      // verify that the query param does not persist as a cookie
      res = await sesh.get('/docs/api/browser-window')
      $ = cheerio.load(res.text)
      $('blockquote').text().should.not.include(frenchContent)
    })
  })

  test('redirects for date-style blog URLs', async () => {
    const res = await supertest(app).get('/blog/2017/06/01/typescript')
    res.statusCode.should.be.above(300).and.below(303)
    res.headers.location.should.equal('/blog/typescript')
  })

  test('redirects trailing slashes', async () => {
    const res = await supertest(app).get('/apps/')
    res.statusCode.should.equal(301)
    res.headers.location.should.equal('/apps')
  })

  describe('issues and pull request URLs', () => {
    test('redirects /issues to the website repo, for convenience', async () => {
      const res = await supertest(app).get('/issues')
      res.statusCode.should.equal(301)
      res.headers.location.should.equal('https://github.com/electron/electronjs.org/issues')
    })

    test('redirects /issues/new to the website repo, for convenience', async () => {
      const res = await supertest(app).get('/issues')
      res.statusCode.should.equal(301)
      res.headers.location.should.equal('https://github.com/electron/electronjs.org/issues')
    })

    test('redirects /pulls to the website repo, for convenience', async () => {
      const res = await supertest(app).get('/pulls')
      res.statusCode.should.equal(301)
      res.headers.location.should.equal('https://github.com/electron/electronjs.org/pulls')
    })
  })

  describe('proxy to crowdin API', () => {
    beforeEach(() => {
      process.env.CROWDIN_KEY = '123'
    })

    afterEach(() => {
      delete process.env.CROWDIN_KEY
    })

    test('hits crowdin API', async() => {
      const mock = nock('https://api.crowdin.com')
        .get('/api/project/electron/info')
        .query({ key: process.env.CROWDIN_KEY, json: true })
        .once()
        .reply(200, { stats: 'mocked' })

      const res = await supertest(app).get('/crowdin/info')
      res.statusCode.should.equal(200)
      res.type.should.equal('application/json')
      res.text.should.eq('{"stats":"mocked"}')

      mock.done()
    })

    test('returns 404 when trying to access API endpoints that are not whitelisted', async() => {
      const res = await supertest(app).get('/crowdin/export')
      res.statusCode.should.equal(404)
    })

    test('returns 401 when CROWDIN_KEY is not set', async() => {
      delete process.env.CROWDIN_KEY
      const res = await supertest(app).get('/crowdin/status')
      res.statusCode.should.equal(401)
      res.type.should.equal('application/json')
      res.text.should.eq('"process.env.CROWDIN_KEY is not set"')
    })

    test('returns 405 on request with method other than GET', async() => {
      const res = await supertest(app).post('/crowdin/add-file')
      res.statusCode.should.equal(405)
      res.type.should.equal('application/json')
      res.text.should.eq('"POST not allowed"')
    })
  })

  describe('search', () => {
    test('only shows search bar when there is no query', async() => {
      const $ = await get('/search')
      $('search-results').length.should.equal(0)
    })
    test('shows no more than 5 results from each of the 3 sources when there is query', async() => {
      const $ = await get('/search?q=ipc')
      $('ul.search-results').length.should.equal(3)
      $('ul.search-results').each((i, elem) => {
        $(elem).children('li').length.should.be.at.most(5)
      })
    })
    test('shows results from one source if specified', async () => {
      const $ = await get('/search/docs?q=ipc')
      $('ul.search-results').length.should.equal(1)
    })

    test('does not crash on unusual queries', async () => {
      const res = await supertest(app).get('/search/docs?q=*')
      res.statusCode.should.equal(200)
    })
  })
})
