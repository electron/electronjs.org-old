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
    $('.posts-list li').length.should.be.above(10)
    // TODO: localized content
    // TODO: page title
  })

  test('/blog/webtorrent', async () => {
    const $ = await get('/blog/webtorrent')
    $('header').should.have.class('site-header')
    // TODO: post title is page title
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
})
