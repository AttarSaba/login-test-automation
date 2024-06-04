# login-test-automation
**Summary**
This project consists of a simple node application that presents a login page with the ability to enter login credentials. If correct credentials are entered then the welcome page is presented otherwise an error page is displayed.

The tests in the project are BDD style tests that are driven by cucumber features and drive the tests using selenium webdriver.

**Prerequisites**

 Java — SDK: Java 8

 Node.js and npm

 `brew install node`

**Set up your project**
   Create a directory for your project and initialize npm using:

   `npm -y init`

 **Install the Selenium-webdriver, Cucumber, Browser driver, Chai.js, Cucumber-html-reporter**
   
   while in your project directory using:
  
  `npm install selenium-webdriver cucumber chromedriver chai cucumber-html-reporter -D`

  
   selenium-webdriver - Browser automation library
 
   cucumber - BDD framework
 
   browser driver: chromedriver
 
   chai.js: Assertion library
 
   cucumber-html-reporter - To generate reports

**Quick Start**

1. Clone the project using git clone https://github.com/AttarSaba/login-test-automation.git
   
2. Install node modules - npm install

3. Correct credentials to login are practice / SuperSecretPassword!

4. To run tests - npm run test.








