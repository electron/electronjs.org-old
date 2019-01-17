require('require-yaml')

const { describe, it } = require('mocha')
const chai = require('chai')
chai.should()
const { expect } = chai
const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const flat = require('flat')
const getProp = require('lodash').get

const locale = require(path.join(__dirname, '../data/locale.yml'))
const views = walk.entries(path.join(__dirname, '../views'))
  .filter(entry => path.extname(entry.relativePath) === '.html')
  .map(entry => {
    const fullPath = path.join(entry.basePath, entry.relativePath)
    const view = {
      relativePath: entry.relativePath,
      localizedKeys: (fs.readFileSync(fullPath, 'utf8').match(/{{(@root\/)?[./]*localized\.[a-z_.]*}}/g) || [])
        .map(ref => ref.replace(/(\.\.|@root)\//g, '').replace('{{localized.', '').replace('}}', ''))
    }
    return view
  })
  .filter(view => view.localizedKeys.length)
  // console.log(views)

describe('localized views', () => {
  // Find all instances of {{localized.something.something}} in the views
  // and ensure that locale.yml has a corresponding string
  it('every reference to a localized string is defined', () => {
    views.should.be.an('array')
    views.length.should.be.above(8)
    views.forEach(view => {
      view.localizedKeys.length.should.be.above(0)
      view.localizedKeys.forEach(key => {
        expect(getProp(locale, key), `${view.relativePath}: ${key} has no string in locale.yml`).to.be.a('string')
      })
    })
  })

  // Ensure every string in locale.yml is actually used somewhere
  it('every string in locale.yml is used in a view (except for pages.* and _404.*)', () => {
    const keys = Object.keys(flat(locale))
      .filter(key => !key.startsWith('pages.'))
      .filter(key => !key.startsWith('_404.'))
    keys.should.be.an('array')
    keys.length.should.be.above(50)

    const usedKeys = views.reduce((acc, view) => {
      acc = acc.concat(view.localizedKeys)
      return acc
    }, [])

    keys.forEach(key => expect(usedKeys, `did not find ${key} in any handlebars template`).to.include(key))
  })
})
