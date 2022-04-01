const { Builder, By, Key, until } = require('selenium-webdriver');

class CheckMyBookedLessons {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      await this.driver.sleep(5000)
      // Click Select Box
      let element = await this.driver.findElement(By.css("button[id^=headlessui]"));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // lesson 창 확인
      let elements = await this.driver.findElements(By.css("li[id^=headlessui]"));
      await this.driver.executeScript("arguments[0].click();", elements[0]);
      await this.driver.actions().pause(3000).perform();

      elements = await this.driver.findElements(By.css("button[class='appearance-none box-border focus:outline-none cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", elements[1]);
      await this.driver.actions().pause(3000).perform();

      elements = await this.driver.findElements(By.css("button[class='appearance-none box-border focus:outline-none cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", elements[1]);
      await this.driver.actions().pause(3000).perform();

      await this.driver.sleep(5000)
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/CheckMyBookedLessons.js")
    } finally {
    }
  }
}

module.exports = CheckMyBookedLessons