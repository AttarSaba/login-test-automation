// This support file to perform validations and initialization for our app //
 
 
import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import selenium from 'selenium-webdriver';

// Page helpers
import loginPage from '../../page-helpers/login-page.js';

function bindObjectFunctions(that, object) {
    const funcs = {};
    Object.keys(object).forEach((func) => {
      if (typeof object[func] === 'function') {
        funcs[func] = object[func].bind(that);
      } else {
        funcs[func] = object[func];
      }
    });
  
    return funcs;
}
  
class CustomWorld {
    constructor() {
        this.driver = new selenium.Builder()
            .forBrowser('chrome')
            .build();
        this.pages = {
            loginPage: bindObjectFunctions(this, loginPage)
        };
    }
}
setDefaultTimeout(30 * 1000);
setWorldConstructor(CustomWorld);