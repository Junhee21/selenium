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
      let elements = await this.driver.findElements(By.css("div[class='whitespace-nowrap text-gray-600']"));
      await this.driver.executeScript("arguments[0].click();", elements[1]);
      await this.driver.actions().pause(3000).perform();

      await this.driver.switchTo().frame(0);

      element = await this.driver.findElement(By.id('movie_player'));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      while (true) {
        element = await this.driver.findElement(By.css('button[class="ytp-play-button ytp-button"]'));
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