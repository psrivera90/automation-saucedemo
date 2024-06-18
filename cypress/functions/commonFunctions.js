class commonFunctions {
    clickOn (button) {
        cy.get(button)
        .should('be.visible')
        .click({force: true})
    }
}

module.exports = new commonFunctions();