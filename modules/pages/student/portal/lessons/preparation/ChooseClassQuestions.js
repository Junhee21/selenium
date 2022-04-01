const { Builder, By, Key, until } = require('selenium-webdriver');

class ChooseClassQuestions {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let element = null;
    try {
      let buttonElements = await this.driver.findElements(By.css("button[class='appearance-none box-border focus:outline-none cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", buttonElements[4]);
      await this.driver.actions().pause(3000).perform();

      let checkElement = await this.driver.findElement(By.css("div[class='text-sBody text-primary flex items-center cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", checkElement);
      await this.driver.actions().pause(3000).perform();

      await this.driver.executeScript("arguments[0].click();", buttonElements[5]);
      await this.driver.actions().pause(3000).perform();

      checkElement = await this.driver.findElement(By.css("div[class='text-sBody text-primary flex items-center cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", checkElement);
      await this.driver.actions().pause(3000).perform();

      await this.driver.executeScript("arguments[0].click();", buttonElements[6]);
      await this.driver.actions().pause(3000).perform();

      checkElement = await this.driver.findElement(By.css("div[class='text-sBody text-primary flex items-center cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", checkElement);
      await this.driver.actions().pause(3000).perform();

    } catch {
      console.log("Error - modules/pages/student/portal/lessons/preparation/ChooseClassQuestions.js");
    } finally {
    }
  }
}

module.exports = ChooseClassQuestions