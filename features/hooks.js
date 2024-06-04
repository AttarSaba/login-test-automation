import { Before, After } from "@cucumber/cucumber";

Before(async function(scenario) {
  global.console.log('***************** scenario ***********************');
  global.console.log(scenario.pickle.name);
  return this.driver.manage().window().maximize();
});

After(async function cb(scenario) {
  if (scenario.result.status === 'failed') {
    const currentUrl = await this.driver.getCurrentUrl();
    this.attach(`URL: ${currentUrl}`);

    // add a screenshot to the error report
    const screenShot = await this.driver.takeScreenshot();
    this.attach(Buffer.from(screenShot, 'base64'), 'image/png');
  } 
  return this.driver.quit();
});