const { Builder, By, Key, until } = require('selenium-webdriver');

class ReadInsight {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let element = null;
    try {
      element = await this.driver.findElement(By.css("div[class='bg-gray-100 rounded-md items-center cursor-pointer mx-auto mt-24 w-full']"));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/preparation/ReadInsight.js");
    } finally {
    }
  }
}

module.exports = ReadInsight