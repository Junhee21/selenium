const { Builder, By, Key, until } = require('selenium-webdriver');

class SelectLessonMaterials {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let element = null
    try {
      // 교재 선택
      let elements = await this.driver.findElements(By.css("div[class='absolute cursor-pointer hover:bg-primary-light']"));
      await this.driver.executeScript("arguments[0].click();", elements[0]);
      await this.driver.actions().pause(3000).perform();

      // Click Next Button
      elements = await this.driver.findElements(By.css("a[class='appearance-none box-border focus:outline-none cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", elements[1]);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/ SelectLessonMaterials.js");
    } finally {
    }
  }
}

module.exports = SelectLessonMaterials