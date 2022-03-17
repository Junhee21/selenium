const { Builder, By, Key, until } = require('selenium-webdriver');

class SignInSignOutGoogleId {
  constructor(driver) {
    this.driver = driver
  }

  async test() {
    try {
      console.log('Test Sign-in / Sign-out with Google-Oauth\n\n');
      
      const LandingHomePage = require('../modules/noSignIn/LandingHomePage')
      await new LandingHomePage(this.driver).test();

      const SignInGoogleId = require('../modules/noSignIn/SignInGoogleId')
      await new SignInGoogleId(this.driver).test();

    } finally {
      console.log("Finish Test")
    }

  }
}
module.exports = SignInSignOutGoogleId 
