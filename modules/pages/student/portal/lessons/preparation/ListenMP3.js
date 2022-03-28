const { Builder, By, Key, until } = require('selenium-webdriver');

class ListenMP3 {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let xpath = null;
    let element = null;
    try {
      xpath = By.xpath('/html/body/div/div/div[4]/div/div[1]/div[3]/div[2]/div[2]/div[4]/button[2]');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      xpath = By.xpath('/html/body/div/div/div[4]/div/div[1]/div[3]/div[2]/div[2]/div[2]/div[2]')
      let timeStr = await this.driver.findElement(xpath).getText();
      let time = timeStr[0] * 600 + timeStr[1] * 60 + timeStr[3] * 10 + Number(timeStr[4]);
      await this.driver.sleep(time * 1000);
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/preparation/ListenMP3.js");
    } finally {
    }
  }
}

module.exports = ListenMP3