const { Builder, By, Key, until } = require('selenium-webdriver');

class ConnectHomePage {
  constructor(driver, page) {
    this.driver = driver
    this.page = page
  }
  async test() {
    try {
      await this.driver.get(this.page);
      await this.driver.actions().pause(3000).perform();
      await this.driver.wait(until.urlContains(this.page + '/en/student/landing/home'), 10000);
    } catch {
      console.log("Error - modules/Landing/ConnectHomePage.js")
    } finally {
    }
  }
}

module.exports = ConnectHomePage