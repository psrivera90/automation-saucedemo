const commonFunctions = require("../functions/commonFunctions");

class loginPage {

    constructor() {
        this.selectors = {
            usernameInput : '[data-test="username"]',
            passwordInput : '[data-test="password"]',
            buttonLogin : '[data-test="login-button"]',
            errorMessage: '[data-test="error"]'
        }
    }

    insertCredentials (username, password) {
        const credentials = [
            { input: this.selectors.usernameInput, value: username },
            { input: this.selectors.passwordInput, value: password }
        ]

        credentials.forEach(({ input, value }) => {
            cy.get(input).clear()
            if (value !== "") {
                cy.get(input).type(value, { force: true})
            }
        })
    }

    checkErrorMessage(error) {
        cy.get(this.selectors.errorMessage)
        .should('be.visible')
        .and('contain', error)
    }

    loginSauceDemo() {
        commonFunctions.clickOn(this.selectors.buttonLogin)
    }

    checkHomeSauceDemo() {
        cy.fixture('dataSauceDemo').then((data) => {
            cy.title().should('include', data.Title)
        })
    }
}

module.exports = new loginPage();