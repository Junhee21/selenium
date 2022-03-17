const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function htmlParsing() {
  const screen = {
    width: 1180,
    height: 480
  };
  require('dotenv').config();
  const driver = await new Builder().forBrowser('chrome').build(); //필요?

  const SignInSignOutGoogleId = require('./tests/SignInSignOutGoogleId');

  try{
    await new SignInSignOutGoogleId(driver).test()
  } finally {
    driver.quit()
  }
})();
