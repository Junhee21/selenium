const { Builder, By, Key, until } = require('selenium-webdriver');

class ClickLessons {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      // Click 1:1 Lessons
      let xpath = By.xpath('//*[@id="navbarCollapse"]/div[3]/ul/li[2]/a');
      let element = await this.driver.findElement(xpath);
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