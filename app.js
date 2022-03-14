const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function htmlParsing() {
  const screen = {
    width: 1180,
    height: 480
  };

  const driver = await new Builder().forBrowser('chrome').build();

  const LandingHomePage = require('./modules/noLogin/landingHomePage.js');

  const landingHomePage = new LandingHomePage(driver);

  try{
    await landingHomePage.test()
    // await signinPagetest.test()
    // await portalpageTest.test()
  } finally {
    driver.quit()
  }
})();
