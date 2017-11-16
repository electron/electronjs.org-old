require('make-promises-safe')
const {describe, it} = require('mocha')
const test = it
const supertest = require('supertest')
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

describe('electron.atom.io', () => {
  test('/', async () => {
    const $ = await get('/')
    $('header').should.have.class('site-header')
    $('p.jumbotron-lead').should.contain('Build cross platform desktop apps')
    $('.featured-app').length.should.equal(24)

    // versions
    $('#electron-versions').text().should.match(/Electron: \d+\.\d+\.\d+/)
    $('#electron-versions').text().should.match(/Node: \d+\.\d+\.\d+/)
    $('#electron-versions').text().should.match(/Chromium: \d+\.\d+\.\d+\.\d+/)
    $('#electron-versions').text().should.match(/V8: \d+\.\d+\.\d+\.\d+/)
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
      $('.docs-breadcrumbs a').should.have.length(3)
      $('.docs-breadcrumbs a[href="/docs/api"]').should.have.text('API')
    })

    test('redirects pre-1.0 docs URLs', async () => {
      const res = await supertest(app).get(`/docs/v0.20.0/api/app`)
      res.statusCode.should.equal(302)
      res.headers.location.should.equal('/docs/api/app')
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
      $('.page-section.error-page').length.should.eq(0)
    })

    test('docs/404', async () => {
      const $ = await get('/docs/404')
      $('.page-section.error-page').length.should.eq(1)
    })

    test('docs/api/404', async () => {
      const $ = await get('/docs/api/404')
      $('.page-section.error-page').length.should.eq(1)
    })
  })

  test('/community', async() => {
    await get('/languages/vi-VN')
    const $ = await get('/community')
    $('.subtron .container-narrow h1').text().should.eq(i18n.website['vi-VN'].community.title)
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
  })

  test('/community', async() => {
    await get('/languages/vi-VN')
    const $ = await get('/community')
    $('.subtron .container-narrow h1').text().should.eq(i18n.website['vi-VN'].community.title)
  })

  describe('userland', () => {
    test('userland/404', async () => {
      const $ = await get('/userland/404')
      $('.page-section.error-page').length.should.eq(1)
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

  test('/community', async () => {
    const $ = await get('/community')
    $('h1').text().should.eq('Electron Community')

    const titles = $('h2').map((i, el) => $(el).text()).get()
    titles.should.include('Tools')
    titles.should.include('Components')
    titles.should.include('Meetups')
  })

  test('/languages', async () => {
    const $ = await get('/languages')
    $('h1').text().should.eq('Languages')
    $('body').text().should.include('global developer community')
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

  describe('issues', () => {
    test('redirects /issues to the website repo, for convenience', async () => {
      const res = await supertest(app).get('/issues')
      res.statusCode.should.equal(301)
      res.headers.location.should.equal('https://github.com/electron/electron.atom.io/issues')
    })

    test('redirects /issues/new to the website repo, for convenience', async () => {
      const res = await supertest(app).get('/issues')
      res.statusCode.should.equal(301)
      res.headers.location.should.equal('https://github.com/electron/electron.atom.io/issues')
    })
  })
})
