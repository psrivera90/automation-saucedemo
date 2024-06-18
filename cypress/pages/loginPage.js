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
        if(username !== "") {
            cy.get(this.selectors.usernameInput).clear().type(username)
        }

        if(password !== "") {
            cy.get(this.selectors.passwordInput).clear().type(password)
        }
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