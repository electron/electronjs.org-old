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
})

describe('search', () => {
    it('filters for type when search is prepended with type:', () => {
      cy.visit('http://localhost:5000')
      cy.get('.nav-search').type('app:')
      cy.wait(100)
      cy.get('#api-hits').should('not.be.visible')
      cy.get('#package-hits').should('not.be.visible')
      cy.get('#tutorial-hits').should('not.be.visible')
    })

    it('filters for type when search is prepended with is:type', () => {
      cy.visit('http://localhost:5000')
      cy.get('.nav-search').type('is:app')
      cy.wait(100)
      cy.get('#api-hits').should('not.be.visible')
      cy.get('#package-hits').should('not.be.visible')
      cy.get('#tutorial-hits').should('not.be.visible')
    })


})
