Cypress.Commands.add('visitHomeSauceDemo', () => {
  cy.fixture('dataSauceDemo').then((data) => {
    cy.visit(data.Login_page)
    cy.title().should('include', data.Title)
  })
}) 
