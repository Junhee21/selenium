const { Builder, By, Key, until } = require('selenium-webdriver');

class WatchVideo {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let xpath = null;
    let element = null;
    try {
      xpath = By.xpath('/html/body/div/div[4]/div/div[1]/div[1]/div/div/div[3]/div');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      await this.driver.switchTo().frame(0);

      xpath = By.xpath('/html/body/div/div')
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      while (true) {
        xpath = By.xpath('/html/body/div/div/div[31]/div[2]/div[1]/button')
        element = await this.driver.findElement(xpath);
        let title = await element.getAttribute('title');
        if (title === 'Replay')
          break;
      }

      await this.driver.switchTo().defaultContent();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/preparation/WatchVideo.js");
    } finally {
    }
  }
}

module.exports = WatchVideo