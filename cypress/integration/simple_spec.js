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
