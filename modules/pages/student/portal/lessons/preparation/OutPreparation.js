const { Builder, By, Key, until } = require('selenium-webdriver');

class OutPreparation {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let element = null;
    try {
      element = await this.driver.findElement(By.css("div[class='flex flex-row cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
      await this.driver.sleep(10000);
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/preparation/OutPreparation.js");
    } finally {
    }
  }
}

module.exports = OutPreparation