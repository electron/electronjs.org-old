describe('electronjs.org', () => {
  it('works', () => {
    cy.visit('http://localhost:5000')
    cy.title().should('include', 'Build cross platform desktop apps')

    // Apps page
    cy.get('a[href="/apps"]:first').click()
    cy.get('.app-list').should('contain', 'gitmoji')

    // App filtering
    cy.get('#apps-filter').type('homebrew')
    cy.wait(100)
    cy.get('.app-list').should('contain', 'GitHub Desktop')
    cy.get('.app-list').should('not.contain', 'gitmoji')
  })
  it('shows downloads section for apps that have downloadable files', () => {
    cy.visit('http://localhost:5000/apps/dat')
    cy.get('.app-meta-entry-downloads').should('be.visible')
  })

  it('hides downloads section for apps with no downloadable files', () => {
    cy.visit('http://localhost:5000/apps/protegopdf')
    cy.wait(100)
    cy.get('.app-meta-entry-downloads').should('not.be.visible')
  })
})

describe('search', () => {
    before(() =>{
      cy.visit('http://localhost:5000')
    })

    beforeEach(() => {
      cy.get('.nav-search').clear()
    })

    it('the results returned from searching match the results returned from each algolia index', () => {
      cy.get('.nav-search').type('window')
      cy.wait(100)
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
      cy.wait(100)
      cy.get('.ais-hits--item em').contains('window')
      cy.get('.nav-search').clear().type('electron')
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