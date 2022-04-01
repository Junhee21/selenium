const { Builder, By, Key, until } = require('selenium-webdriver');

class ClickLessons {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let element = null
    try {
      // Click 1:1 Lessons
      let element = await this.driver.findElement(By.css('a[href="/en/student/portal/lessons/schedule-enter"]'));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // lesson 창 확인
      await this.driver.wait(until.urlContains(this.page + '/en/student/portal/lessons/'), 10000);
    } catch {
      console.log("Error - modules/pages/student/portal/home/ClickLessons.js")
    } finally {
    }
  }
}

module.exports = ClickLessons