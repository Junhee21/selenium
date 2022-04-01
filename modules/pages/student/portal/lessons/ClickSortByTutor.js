const { Builder, By, Key, until } = require('selenium-webdriver');

class ClickSortByTutor {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let element = null;
    try {
      element = await this.driver.findElement(By.css('div[href="/en/student/portal/lessons/schedule-enter"]'));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      element = await this.driver.findElement(By.css('a[href="/en/student/portal/lessons/schedule?mode=tutor"]'));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      await this.driver.wait(until.urlContains(this.page + '/en/student/portal/lessons/schedule?mode=tutor'), 10000);
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/ClickSortByTutor.js")
    } finally {
    }
  }
}

module.exports = ClickSortByTutor