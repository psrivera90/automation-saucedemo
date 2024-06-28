# automationSauceDemo
_Automated test implementation: Login and logout on Sauce Demo_

# Description

These tests automate scenarios that test login and logout functionality in the Swag Labs application.

## Table of Contents

- [Installation](#installation)
- [Running the tests](#running-the-tests)
- [User story](#user-story)
- [Cucumber implementation](#cucumber-implementation)
  - [Feature file](#feature-file)
  - [Step definitions](#step-definitions)
- [Fixtures](#fixtures)
- [Common functions](#common-functions)
- [Page objects](#page-objects)
- [Commands](#commands)
- [Contributions](#contributions)

## Installation

1. Clone this repository to your local machine
   
       git clone https://github.com/psrivera90/automation-saucedemo/

2. Navigate to the project folder
   
       cd automation-saucedemo

3. Install the dependencies
   
       npm install

4. Install Cypress
   
       npm install cypress --save-dev

5. Install Cucumber and Cypress Cucumber Preprocessor
    
       npm install --save-dev cypress-cucumber-preprocessor

6. Update Cypress configuration
   
   Add the following to your _'cypress/plugins/index.js'_ file:

       const cucumber = require('cypress-cucumber-preprocessor').default
   
       module.exports = (on, config) => {
         on('file:preprocessor', cucumber())
       }
   
   Update your _'cypress.json'_ to include the Cucumber preprocessor configuration:

       {
         "testFiles": "**/*.feature"
       }

## Running the tests

1. Open Cypress test runner:

        npx cypress open

2. Run the test feature file from the Cypress test runner interface

    Alternatively, you can run the tests in headless mode using:

       npx cypress run --spec cypress/features/loginAndLogout.feature

## User story

The user story and acceptance criteria are defined in the feature file.

## Cucumber implementation

### Feature file

The feature file _'loginAndLogout.feature'_ is located in _'cypress/feature'_ and includes the test scenarios written in Gherkin synxtax.

### Step definitions

The step definitions file _'loginAndLogout.js'_ is located in _'cypress/support/step_definitions'_ and maps the Gherkin steps to Cypress commands.

## Fixtures

The fixture file _'dataSauceDemo.json'_ located in _'cypress/fixtures'_ contains certain data used in the tests.

## Common functions

The _'commonFunctions.js'_ file is located in _'cypress/functions'_ and contains reusable functions for testing.

## Page objects

The Page Objects files are located in _'cypress/pages'_ and contain classes representing different pages of the application. These files encapsulate the page elements and related actions for better organization and maintainability.

## Commands

The custom comands are defined in the _'cypress/support/commands.js'_ file. These commands extend Cypress with reusable actions and can be used to simplify and standardize test scripts.

## Contributions

Contributions are welcome! Please follow these steps to contribuite:

  1. Fork the repository
     
  2. Create a new branch
     
         git checkout -b feature/your-feature

  3. Make your changes
   
  4. Commit your changes

         git commit -m 'Add some feature'

  5. Push to the branch
