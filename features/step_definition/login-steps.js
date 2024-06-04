import { Given, When, Then} from "@cucumber/cucumber";
import { By } from "selenium-webdriver";
import config from "../../config.js";
// import config from "@/config.js";
import { assert } from "chai";
import loginPage from "../../page-helpers/login-page.js";


Given('I am on practice website', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.driver.get(config.baseURL)
});

Given('I am on parabank login page', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.driver.get(config.baseURL)
});

Then('I should see the login page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.pages.loginPage.verifyHomepageTitle();
    await this.pages.loginPage.verifyLoginPage();
});

When('I enter username', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.pages.loginPage.enterUserName(config.username);
});

When('I enter password', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.pages.loginPage.enterPassword(config.password);
});

When('I click Login button', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.pages.loginPage.clickLogInButton();
});

Then('I am successfully logged into secure page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.pages.loginPage.verifySecurePageMessage();
    await this.pages.loginPage.verifySecurePageHeader();  
});

Then('Logout button is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.pages.loginPage.verifyLoginButtonDisplayed();
});

When('I enter username as {string}', function (invalidUser) {
    // Write code here that turns the phrase above into concrete actions
    return this.pages.loginPage.enterInvalidUserName(invalidUser);
});

When('I enter password as {string}', function (invalidPassword) {
    // Write code here that turns the phrase above into concrete actions
    return this.pages.loginPage.enterInvalidPassword(invalidPassword);
  });
  
Then('I see the error displayed for {string}', function (fieldName) {
    // Write code here that turns the phrase above into concrete actions
    return this.pages.loginPage.verifyErrorMessage(fieldName);
});

Then('I am on login page', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.pages.loginPage.verifyLoginPage();
});

When('I click Logout button', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.pages.loginPage.clickLogOutButton();
});