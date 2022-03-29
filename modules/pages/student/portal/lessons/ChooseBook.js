const { Builder, By, Key, until } = require('selenium-webdriver');

class ChooseBook {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      // 교재 선택
      let xpath = By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div/div/div/div/div/div[2]/div[1]/div[2]/div[2]/div/div[1]/div/div/div/div[2]');
      let element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // Click Next Button
      xpath = By.xpath('/html/body/div[1]/div[2]/div/div[1]/div/div/div/div[7]/a[2]');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/ChooseBook.js");
    } finally {
    }
  }
}

module.exports = ChooseBook