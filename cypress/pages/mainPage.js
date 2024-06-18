const commonFunctions = require("../functions/commonFunctions");
const loginPage = require("./loginPage");

class mainPage {

    constructor() {
        this.selectors = {
            menuIcon : '#react-burger-menu-btn',
            buttonLogout : '[data-test="logout-sidebar-link"]'
        }
    }

    checkMainSauceDemo() {
        cy.fixture('dataSauceDemo').then((data) => {
            cy.url().should('eq', data.Main_page)
        })
    }

    visitMainSauceDemo() {
        cy.visitHomeSauceDemo()
        cy.fixture('dataSauceDemo').then((data) => {
            loginPage.insertCredentials(data.Valid_user, data.Valid_password)
            loginPage.loginSauceDemo()
            cy.url().should('eq', data.Main_page)
        }) 
    }

    logoutAction() {
        commonFunctions.clickOn(this.selectors.menuIcon)
        commonFunctions.clickOn(this.selectors.buttonLogout)
    }
}

module.exports = new mainPage();