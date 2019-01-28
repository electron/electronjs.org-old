// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// https://github.com/cypress-io/cypress/issues/1313#issuecomment-449456550
// eslint-disable-next-line
if (Cypress.env('RETRY_FAILED_TESTS')) {
  let skip = false
  const _it = window.it
  const _beforeEach = window.beforeEach

  window.beforeEach = (...args) => {
    const beforeEachFn = args.pop()
    args.push(() => {
      if (!skip) beforeEachFn()
    })
    _beforeEach(...args)
  }

  window.it = (testName, testFn) => {
    if (!testFn) {
      _it(testName)
      return
    }

    _it(`${testName} 🔄 1 of 3`, function () {
      skip = true
      // eslint-disable-next-line
      cy.on('fail', () => {
        skip = false
        this.skip()
      })
      testFn()
    })

    _it(`${testName} 🔄 2 of 3`, function () {
      if (skip) this.skip()
      skip = true
      // eslint-disable-next-line
      cy.on('fail', () => {
        skip = false
        this.skip()
      })
      testFn()
    })

    _it(`${testName} 🔄 3 of 3`, function () {
      const _skip = skip
      skip = false
      if (_skip) this.skip()
      testFn()
    })
  }

  window.it.skip = _it.skip
  window.it.only = _it.only
}
