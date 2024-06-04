@login_tests
Feature: As a valid user
         I should be able to login practice website
         So that I can enter the Secure page successfully

    Background: 
        Given I am on practice website
        Then I should see the login page
        
    Scenario: User logins successfully
        When I enter username
        And I enter password
        And I click Login button
        Then I am successfully logged into secure page
        And Logout button is displayed

    Scenario Outline: User enters invalid username
        When I enter username as "<username>"
        And I enter password
        And I click Login button
        Then I see the error displayed for "username"
        And I am on login page
        Examples:
            | username             |
            |                      |
            | pra ctice            |
            | SuperSecretPassword! |

    Scenario Outline: User enters invalid password
        When I enter username
        And I enter password as "<password>"
        And I click Login button
        Then I see the error displayed for "password"
        And I am on login page
        Examples:
            | password             |
            | SuperSecretPassword  |
            | superSecretPassword! |
            | practice             |

    Scenario Outline: User enters both username and password invalid
        When I enter username as "<username>"
        And I enter password as "<password>"
        And I click Login button
        Then I see the error displayed for "username"
        And I am on login page
        Examples:
            | username | password             |
            |          |                      |
            | Practic  | SupersecretPassword! |

    Scenario: User logout successfully
        When I enter username
        And I enter password
        And I click Login button
        Then I am successfully logged into secure page
        And Logout button is displayed
        When I click Logout button
        And I am on login page
        