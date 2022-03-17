const { Builder, By, Key, until } = require('selenium-webdriver');

class LandingHomePage {
  constructor(driver) {
    this.driver = driver
  }
  async test() {
    try {
      console.log('Land Home-page [https://www.ringleplus.com/student/landing/home]\n\n');
      await this.driver.get('https://www.ringleplus.com/en/student/landing/home');
    } finally {
    }
  }
}

module.exports = LandingHomePage