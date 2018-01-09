const { describe, it, before } = require('mocha')
const test = it
const chai = require('chai')
chai.should()
const proxyquire = require('proxyquire').noCallThru()

describe('resolvers for search functionality', () => {
  let resolvers
  before(() => {
    const npmStub = new Array(50).fill({
      name: 'package name',
      keywords: 'keywords',
      description: 'description'
    }).concat([{
      name: 'Babel Fish',
      keywords: 'babel fish',
      description: 'The Babel fish is small, yellow, leech-like, and probably the oddest thing in the Universe.'
    }, {
      name: 'Babel Fish',
      keywords: 'babel fish'
    }])
    const repoStub = new Array(50).fill({
      fullName: 'repo name',
      description: 'description'
    }).concat([{
      fullName: 'Hitchhikers/Babel-Fish',
      description: 'The Babel fish is small, yellow, leech-like, and probably the oddest thing in the Universe.'
    }])
    const docStub = {
      docs: {
        'en-US': {
          1: {
            title: 'title',
            description: 'description',
            markdown: 'markdown'
          },
          2: {
            title: 'Babel Fish',
            description: 'The Babel fish is small, yellow, leech-like, and probably the oddest thing in the Universe.',
            markdown: 'markdown'
          }
        }
      }
    }
    resolvers = proxyquire('../routes/search/resolvers', {
      '../../lib/i18n': docStub,
      'electron-npm-packages': npmStub,
      'repos-using-electron/lite': repoStub
    })
  })

  test('returns npm packages data source when no filter is provided', () => {
    const results = resolvers.npmPackages({})
    results[0].should.deep.equal({
      name: 'package name',
      keywords: 'keywords',
      description: 'description'
    })
    results.should.have.lengthOf(42)
  })

  test('returns repo data source when no filter is provided', () => {
    const results = resolvers.repos({})
    results[0].should.deep.equal({
      fullName: 'repo name',
      description: 'description'
    })
    results.should.have.lengthOf(42)
  })

  test('returns docs data source when no filter is provided', () => {
    const results = resolvers.docs({})
    results[0].should.deep.equal({
      title: 'title',
      description: 'description',
      markdown: 'markdown'
    })
  })

  test('filter data sources by keyword', () => {
    const npmResult = resolvers.npmPackages({ filter: 'babel fish' })
    const repoResult = resolvers.repos({ filter: 'babel fish' })
    const docResult = resolvers.docs({filter: 'babel fish'})

    npmResult.should.have.lengthOf(2)
    repoResult.should.have.lengthOf(1)
    docResult.should.have.lengthOf(1)

    npmResult[0].should.include({
      name: 'Babel Fish',
      keywords: 'babel fish',
      description: 'The Babel fish is small, yellow, leech-like, and probably the oddest thing in the Universe.'
    })
    repoResult[0].should.include({
      fullName: 'Hitchhikers/Babel-Fish',
      description: 'The Babel fish is small, yellow, leech-like, and probably the oddest thing in the Universe.'
    })
    docResult[0].should.include({
      title: 'Babel Fish',
      description: 'The Babel fish is small, yellow, leech-like, and probably the oddest thing in the Universe.',
      markdown: 'markdown'
    })
  })

  test('sort results according to relevance', () => {
    const results = resolvers.npmPackages({ filter: 'babel fish' })
    results.should.have.length(2)
    results.forEach((res) => res.should.have.property('score'))
    results[0].score.should.be.above(results[1].score)
  })
})
