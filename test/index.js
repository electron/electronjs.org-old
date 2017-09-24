require('make-promises-safe')
const {describe, it} = require('mocha')
const test = it
const supertest = require('supertest')
const cheerio = require('cheerio')
const chai = require('chai')
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
  })

  test('/apps', async () => {
    const $ = await get('/apps')
    $('.listed-app').length.should.be.above(300)
    $('.category-list li').length.should.be.above(15)
  })

  test('/apps?category=games', async () => {
    const $ = await get('/apps?category=games')
    $('.listed-app').length.should.be.above(15)
    $('#category-games.selected').length.should.equal(1)
  })

  test('/docs', async () => {
    const $ = await get('/docs')
    $('header').should.have.class('site-header')
    $('a[href="/docs/tutorial/about"]').should.have.text('About Electron')
    $('a[href="/docs/api/auto-updater"]').should.have.text('autoUpdater')
  })

  test('/docs/api/browser-window', async () => {
    const $ = await get('/docs/api/browser-window')
    $('.docs-breadcrumbs a').should.have.length(2)
    $('.docs-breadcrumbs a[href="/docs/api"]').should.have.text('API')
  })

  test('/blog', async () => {
    const $ = await get('/blog')
    $('header').should.have.class('site-header')
    // TODO: localized content
    // TODO: page title
    // TODO: list of posts
  })

  // test('/blog/webtorrent', async () => {
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

  test('redirects trailing slashes', async () => {
    const res = await supertest(app).get('/apps/')
    res.statusCode.should.equal(301)
    res.headers.location.should.equal('/apps')
  })
})
