const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('dotenv').config();

(async function htmlParsing() {
  
  const driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();

  const SignInGoogleAccountTest = require('./tests/RinglePlus/SignInGoogleAccountTest');

  try{
    await new SignInGoogleAccountTest(driver, process.env.RINGLE_PAGE).test()
  } finally {
    driver.quit()
  }
})();
