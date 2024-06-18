const loginPage = require("../../pages/loginPage")
const mainPage = require("../../pages/mainPage")


//Scenario: login with valid credentials
Given('the user is on the login page of Sauce Demo', () => {
    cy.visitHomeSauceDemo()
})

When('the user enters valid username {string} and password {string}', (username, password) => {
    loginPage.insertCredentials(username, password)
})

And("the user click on login button", () => {
    loginPage.loginSauceDemo()
})

Then('the website redirects me to the main page', () => {
    mainPage.checkMainSauceDemo()
})

//Scenario: login failed due to invalid credentials
Given('the user is on the login page of Sauce Demo', () => {
    cy.visitSauceDemo()
})

When('the user enters invalid username {string} and password {string}', (username, password) => {
    loginPage.insertCredentials(username, password)
})

And('the user click on login button', () => {
    loginPage.loginSauceDemo()
})

Then('the website should show me an error {string}', (error) => {
    loginPage.checkErrorMessage(error)
})

//successful logout
Given('the authenticated user is on the main page of Sauce Demo', () => {
    mainPage.visitMainSauceDemo()
})

When('the user click on logout button', () => {
    mainPage.logoutAction()
})

Then('the user is redirected to the login page', () => {
    loginPage.checkHomeSauceDemo()
})



