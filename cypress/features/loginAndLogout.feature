Feature: Login and logout management

As a Swag Labs user I want to be able to securely log in with my credentials to access my account and select products to add to the shopping cart.

Scenario Outline: login with valid credentials
  Given the user is on the login page of Sauce Demo
  When the user enters valid username "<username>" and password "<password>" 
  And the user click on login button
  Then the website redirects me to the main page

  Examples:
    | username                | password     |
    | standard_user           | secret_sauce | 
    | problem_user            | secret_sauce | 
    | performance_glitch_user | secret_sauce | 
    | error_user              | secret_sauce | 
    | visual_user             | secret_sauce |

Scenario Outline: login failed due to invalid credentials 
  Given the user is on the login page of Sauce Demo
  When the user enters invalid username "<username>" and password "<password>" 
  And the user click on login button
  Then the website should show me an error "<error>"

  Examples:
    | username        | password     | error                                                                     |
    | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
    | pablo           | secret_sauce | Epic sadface: Username and password do not match any user in this service |
    | standard_user   | pablo        | Epic sadface: Username and password do not match any user in this service |
    |                 |              | Epic sadface: Username is required                                        |
    | standard_user   |              | Epic sadface: Password is required                                        |
    |                 | secret_sauce | Epic sadface: Username is required                                        |

Scenario: successful logout
  Given the authenticated user is on the main page of Sauce Demo
  When the user click on logout button
  Then the user is redirected to the login page