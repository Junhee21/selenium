const { Builder, By, Key, until } = require('selenium-webdriver');
const ConnectHomePage = require('../../modules/ConnectHomePage')
const ClickSignIn = require('../../modules/pages/student/landing/home/ClickSignIn');
const ClickGoogleAccount = require('../../modules/pages/student/auth/sign-in/ClickGoogleAccount');
const SignInGoogleAccount = require('../../modules/pages/student/auth/sign-in/SignInGoogleAccount');

class SignInGoogleAccountTest {
  constructor(driver, page) {
    this.driver = driver
    this.page = page
  }

  async test() {
    try {
      console.log('Test [Sign-in with Google-Account]\n\n');
      await new ConnectHomePage(this.driver, this.page).test();
      await new ClickSignIn(this.driver, this.page).test();
      await new ClickGoogleAccount(this.driver).test();
      await new SignInGoogleAccount(this.driver, this.page).test();

    } finally {
      console.log("Finish Test")
    }

  }
}
module.exports = SignInGoogleAccountTest 
