// NOTE(HashimotoYT): TypeScript declarations support for vscode. Feel free to remove this.
/// <reference path="../../node_modules/cypress/types/index.d.ts" />

const localhost = 'http://localhost:5000'

describe('electronjs.org', () => {
  it('works', () => {
    cy.visit(localhost)
    cy.title().should('include', 'Build cross platform desktop apps')
  })

  describe('apps page', () => {
    it('search apps', () => {
      cy.visit(localhost)

      // Apps page
      cy.get('a[href="/apps"]:first').click()
      cy.get('.app-list').should('contain', 'gitmoji')

      // Search specific app
      cy.get('#apps-filter').type('tusk')
      cy.wait(500)
      cy.get('.app-list').should('contain', 'Tusk')
      cy.get('.app-list').should('not.contain', 'gitmoji')

      cy.get('#apps-filter').clear()

      // Search not one specific app
      cy.get('#apps-filter').type('desktop')
      cy.wait(500)
      cy.get('.app-list').should('contain', 'GitHub Desktop')
    })

    it('shows downloads section for apps that have downloadable files', () => {
      cy.visit('http://localhost:5000/apps/dat')
      cy.get('.app-meta-entry-downloads').should('be.visible')
    })

    it('hides downloads section for apps with no downloadable files', () => {
      cy.visit('http://localhost:5000/apps/protegopdf')
      cy.wait(500)
      cy.get('.app-meta-entry-downloads').should('not.be.visible')
    })

    it('install command displayed for npmjs apps', () => {
      cy.visit(`${localhost}/apps/timeseriesadmin`)
      cy.wait(500)
      cy.get('.app-meta-entry .shell-one-liner').contains('npm install -g')
    })
  })

  describe('documentation page', () => {
    it('open docs page', () => {
      cy.visit(localhost)
      cy.get('a[href="/docs"]:first').click()
      cy.wait(500)

      cy.get('.container-narrow')
      .contains('Electron Documentation')
      cy.get('.container-narrow p').contains('See all of the docs on one page or check out the FAQ.')
    })

    it('documentation page has guides, api references, and advanced sections', () => {
      cy.visit(`${localhost}/docs`)
      cy.wait(500)
      cy.get('a[href="/docs/tutorial"]').contains('Guides')
      cy.get('a[href="/docs/api"]').contains('API Reference')
      cy.get('a[href="/docs/development"]').contains('Advanced')
    })
  })

  describe('blog', () => {
    it('open blog page', () => {
      cy.visit(localhost)
      cy.get('a[href="/blog"]:first').click()
      cy.wait(500)

      cy.get('.container-narrow')
        .contains('Electron Blog')
      cy.get('.container-narrow p').contains('All the latest news from the Electron team and community.')
    })

    it('open blog post', () => {
      cy.visit(`${localhost}/blog`)
      cy.get('a[href="/blog/electron-3-0"]:first').click()
      cy.get('.container-narrow').contains('Electron 3.0.0')
    })
  })

  describe('search', () => {
    before(() => {
      cy.visit(localhost)
    })

    beforeEach(() => {
      cy.get('.nav-search').clear()
    })

    it('the results returned from searching match the results returned from each algolia index', () => {
      cy.get('.nav-search').type('window')
      cy.wait(500)
      let types = ['#tutorial-hits', '#api-hits', '#package-hits', '#app-hits']
      types.forEach(type =>{
        cy.get(type)
          .should(typeHits => {
            if(type.includes('tutorial')) expect(typeHits.first()).to.contain('Windows Taskbar')
            if (type.includes('api')) expect(typeHits.first()).to.contain('window-all-closed')
            if (type.includes('package')) expect(typeHits.first()).to.contain('electron-builder')
            if (type.includes('app')) expect(typeHits.first()).to.contain('PhotoScreenSaver')
          })
      })
    })

    it('highlights what is typed in the input', () => {
      cy.get('.nav-search').type('window')
      cy.wait(500)
      cy.get('.ais-hits--item em').contains('window')
      cy.get('.nav-search').clear()
      cy.get('.nav-search').type('electron')
      cy.wait(500)
      cy.get('.ais-hits--item em').contains('electron')
    })

    // it('filters for type when search is prepended with type:', () => {
    //   cy.get('.nav-search').type('app:')
    //   cy.wait(100)
    //   cy.get('#api-hits').should('not.be.visible')
    //   cy.get('#package-hits').should('not.be.visible')
    //   cy.get('#tutorial-hits').should('not.be.visible')
    // })

    // it('filters for type when search is prepended with is:type', () => {
    //   cy.get('.nav-search').type('is:app')
    //   cy.wait(100)
    //   cy.get('#api-hits').should('not.be.visible')
    //   cy.get('#package-hits').should('not.be.visible')
    //   cy.get('#tutorial-hits').should('not.be.visible')
    // })
  })

  describe('localization', () => {
    it('change language', () => {
      cy.visit(`${localhost}/languages`)
      cy.get('a[href="/languages/ru-RU"]:first').click()
      cy.visit(`${localhost}`)
      cy.wait(500)
      cy.get('.jumbotron-lead').contains('Создавайте кроссплатформенные приложения при помощи JavaScript, HTML и CSS')
    })
  })

  describe('header', () => {
    it('"Electron" hides on small displays (less 1300px)', () => {
      cy.visit(localhost)
      cy.get('.site-header-logo').not('.vertical-middle')
    })

    it('"Electron" contains on displays more 1300px', () => {
      // Set display resolution to 1600x900
      cy.viewport(1600, 900)
      cy.visit(localhost)
      cy.get('.site-header-logo').contains('Electron')
    })
  })

  describe('landing pages', () => {
    // TODO(HashimotoYT): Add tests for Devtron and Spectron landing pages
    it('Fiddle landing page', () => {
      cy.visit(`${localhost}/fiddle`)
      cy.get('.jumbotron-lead').contains('The easiest way to get started with Electron')
    })
  })
})
