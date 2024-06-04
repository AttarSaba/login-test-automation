import { assert } from 'chai';
import { By, until } from 'selenium-webdriver';
import { TITLES, ERROR_MESSAGE, FIELD_TYPE } from '../constants.js';

const elements = {
  username: By.id('username'),
  password: By.id('password'),
  loginButton: By.css('button[type="submit"]'),
  message: By.css('#flash > b'),
  header: By.css('.container > h1'),
  subHeader: By.css('.container > h4'),
  logoutButton: By.css('a[href="/logout"]'),
};

/***
 * Enter user name in username field
 * string username
 */
function enterUserName(userName) {
    return this.driver.findElement(elements.username).sendKeys(userName);
}

/***
 * Enter password in password field
 * 
 * string password
 */
function enterPassword(password) {
    return this.driver.findElement(elements.password).sendKeys(password);
}

//Click Log in buttom
function clickLogInButton() {
    return this.driver.findElement(elements.loginButton).click();
}

/***
 * Verify home page title
 */ 
async function verifyHomepageTitle() {
    await this.driver.wait(until.elementLocated(elements.username), 1000);
    const actualTitle = await this.driver.getTitle();
    assert.equal(actualTitle, TITLES.HOMEPAGE_TITLE , 'User is not on Homepage');
}

/***
 * Verify login page
 */
async function verifyLoginPage() {
    const headerElement = await this.driver.findElement(elements.header);
    const actualHeader = await headerElement.getText();
    assert.equal(actualHeader, TITLES.LOGIN_HEADER, 'User is not on Login page');}

/***
 * Verify secure page message
 */    
async function verifySecurePageMessage() {
    const messageElement = await this.driver.findElement(elements.message);
    const actualMessage = await messageElement.getText();
    assert.equal(actualMessage, TITLES.MESSAGE, 'User is not on Secure page');
}

/***
 * Verify secure page header
 */
async function verifySecurePageHeader() {
    const headerElement = await this.driver.findElement(elements.header);
    const actualHeader = await headerElement.getText();
    const subheaderElement = await this.driver.findElement(elements.subHeader);
    const actualSubHeader = await subheaderElement.getText();
    assert.equal(actualHeader, TITLES.SECURE_HEADER, 'User is not on Secure page');
    assert.equal(actualSubHeader, TITLES.SUBHEADER, 'User is not on Secure page');
}

/***
 * Verify login button displayed
 */
async function verifyLoginButtonDisplayed() {
    const logoutElement = await this.driver.findElement(elements.logoutButton);
    const isVisible = await logoutElement.isDisplayed();
    assert.isTrue(isVisible, 'Logout link is not displayed');
}

/***
 * Enter invalid username in username field
 * string username
 */
function enterInvalidUserName(userName) {
    return this.driver.findElement(elements.username).sendKeys(userName);
}

/***
 * Enter invalid password in password field
 * string password
 */
function enterInvalidPassword(password) {
    return this.driver.findElement(elements.password).sendKeys(password);
}

/***
 * Verify error message
 * string username or password input
 */
async function verifyErrorMessage(fieldType) {
    let expectedErrorMessage;
    const messageElement = await this.driver.findElement(elements.message);
    const actualMessage = await messageElement.getText();
    switch(fieldType) {
        case FIELD_TYPE.USERNAME:
            expectedErrorMessage = ERROR_MESSAGE.USERNAME_ERROR;
            break;
        case FIELD_TYPE.PASSWORD:
            expectedErrorMessage = ERROR_MESSAGE.PASSWORD_ERROR;
            break;
        default: return Promise.reject(new Error(`Invalid field type ${fieldType} passed`));
    }
    assert.equal(actualMessage, expectedErrorMessage, `Error message for ${fieldType} is not displayed`);

}

function clickLogOutButton() {
    return this.driver.findElement(elements.logoutButton).click();
}

export default {
    enterUserName,
    enterPassword,
    clickLogInButton,
    verifyHomepageTitle,
    verifyLoginPage,
    verifySecurePageMessage,
    verifySecurePageHeader,
    verifyLoginButtonDisplayed,
    enterInvalidUserName,
    enterInvalidPassword,
    verifyErrorMessage,
    clickLogOutButton,
  };
  