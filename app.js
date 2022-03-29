const { Builder, By, Key, until } = require('selenium-webdriver');

// 테스트를 불러옴
const SignInTest = require('./tests/QA/SignInTest');
const ReserveLessonTest = require('./tests/QA/ReserveLessonTest');
const PrepareTest = require('./tests/QA/PrepareTest');

// .env 파일을 사용하기 위해
require('dotenv').config();

(async function htmlParsing() {

  const driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();

  try {
    // await new SignInTest(driver, process.env.QA3_PAGE).test()
    await new ReserveLessonTest(driver, process.env.QA3_PAGE).test()
    // await new PrepareTest(driver, process.env.QA3_PAGE).test()
    driver.quit()
  } catch {

  } finally {
    driver.quit()
  }
})();
