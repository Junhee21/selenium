const { Builder, By, Key, until } = require('selenium-webdriver');

class ReadInsight {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let xpath = null;
    let element = null;
    try {
      xpath = By.xpath('/html/body/div/div[4]/div/div[1]/div[3]/div[1]/div[3]/div/div[2]');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/preparation/ReadInsight.js");
    } finally {
    }
  }
}

module.exports = ReadInsight