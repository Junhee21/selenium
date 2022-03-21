const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const SignInGoogleAccountTest = require('./tests/RinglePlus/SignInGoogleAccountTest');
const SignInTest = require('./tests/QA/SignInTest');
const ReserveLessonTest = require('./tests/QA/ReserveLessonTest');

require('dotenv').config();

(async function htmlParsing() {
  
  const driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();

  try{
    // await new SignInGoogleAccountTest(driver, process.env.RINGLE_PAGE).test()
    await new ReserveLessonTest(driver, process.env.QA2_PAGE).test()
  } finally {
    driver.quit()
  }
})();
