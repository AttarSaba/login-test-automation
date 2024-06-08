# login-test-automation
**Summary**
This project consists of a simple node application that presents a login page with the ability to enter login credentials. If correct credentials are entered then the Secure page is presented otherwise an error is displayed.

The tests in the project are BDD style tests that are driven by cucumber features and drive the tests using selenium webdriver with Chrome browser.

Note: The project is implemented on Mac machine

You can install the prerequisites using [Homebrew](http://b.remarkabl.org/homebrew)

**Prerequisites**

 Java — SDK: Java 8 and above

 Downlod from here for both Mac OS or Windows: https://www.oracle.com/java/technologies/downloads/#jdk21-windows

 Node.js and npm

 `brew install node`

 **Quick Start**

1. Clone the project using git clone https://github.com/AttarSaba/login-test-automation.git
   
2. Go to the directory `login-test-automation`, Install node modules - `npm install`

3. Check your chrome browser version, if the browser version is greater than 125, install the chromedriver matching your version using

   `npm i chromedriver@<version>`

4. Skip step 3 if your chrome browser version is 124/125

5. Correct credentials to login are practice / SuperSecretPassword!

6. To run tests - `npm test`

Note: If you are on Windows machine, then after step 3 above execute the following command

4. To run tests: `.\node_modules\.bin\cucumber-js --tags @login_tests`
   
5. To generate report: `node ./index.js`

You are all set.

**Additional Info**:

Following libraries are used to set up a project from scratch:

After creating project, do 

`npm -y init`

 **Install the Selenium-webdriver, Cucumber, Browser driver, Chai.js, Cucumber-html-reporter**
   
   while in your project directory using:
  
  `npm install selenium-webdriver cucumber chromedriver chai cucumber-html-reporter -D`

  
   selenium-webdriver - Browser automation library
 
   cucumber - BDD framework
 
   browser driver: chromedriver
 
   chai.js: Assertion library
 
   cucumber-html-reporter - To generate reports








