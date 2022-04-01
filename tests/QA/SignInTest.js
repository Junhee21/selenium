const { Builder, By, Key, until } = require('selenium-webdriver');
const ConnectHomePage = require('../../modules/ConnectHomePage')
const SignInFirstQa = require('../../modules/SignInFirstQa');
const ClickSignIn = require('../../modules/pages/student/landing/home/ClickSignIn');
const SignIn = require('../../modules/pages/student/auth/sign-in/SignIn');

class SignInTest {
  constructor(driver, page) {
    this.driver = driver
    this.page = page
  }

  async test() {
    try {
      console.log('Test [Sign-in]');
      await new ConnectHomePage(this.driver, this.page).test();
      await new SignInFirstQa(this.driver, this.page).test();
      await new ClickSignIn(this.driver, this.page).test();
      await new SignIn(this.driver, this.page).test();

    } finally {
      console.log("Finish Test")
    }

  }
}
module.exports = SignInTest 
