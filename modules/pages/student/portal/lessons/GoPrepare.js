const { Builder, By, Key, until } = require('selenium-webdriver');
const { urlContains } = require('selenium-webdriver/lib/until');

class GoPrepare {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      let element = await this.driver.findElement(By.css('div[href="/en/student/portal/lessons/upcoming-lessons"]'));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      let elements = await this.driver.findElements(By.css("div[href$='insight']"));
      await this.driver.executeScript("arguments[0].click();", elements[0]);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/GoPrepare.js");
    } finally {
    }
  }
}

module.exports = GoPrepare