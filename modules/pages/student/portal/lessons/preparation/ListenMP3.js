const { Builder, By, Key, until } = require('selenium-webdriver');

class ListenMP3 {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let element = null;
    try {
      element = await this.driver.findElement(By.css("button[class='px-24 focus:outline-none']"));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      let timeStr = await this.driver.findElement(By.css("div[style='padding-left: 4px;']")).getText();
      let time = timeStr[0] * 600 + timeStr[1] * 60 + timeStr[3] * 10 + Number(timeStr[4]);
      await this.driver.sleep(time * 1000);
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/preparation/ListenMP3.js");
    } finally {
    }
  }
}

module.exports = ListenMP3