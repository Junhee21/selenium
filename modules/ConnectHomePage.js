const { Builder, By, Key, until } = require('selenium-webdriver');

class ConnectHomePage {
  constructor(driver, page) {
    this.driver = driver
    this.page = page
  }
  async test() {
    try {
      await this.driver.get(this.page + '/en/student/landing/home');
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/Landing/ConnectHomePage.js")
    } finally {
    }
  }
}

module.exports = ConnectHomePage