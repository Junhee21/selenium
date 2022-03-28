const { Builder, By, Key, until } = require('selenium-webdriver');

class ChooseTutorMatcingOption {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      // Click Select Box
      let xpath = By.xpath('/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/div/div/div[5]/div/div/div[3]/div[3]/div[2]/div/button');
      let element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // lesson 창 확인
      xpath = By.xpath('/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/div/div/div[5]/div/div/div[3]/div[3]/div[2]/div/ul/li[3]');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      xpath = By.xpath('/html/body/div[1]/div/div[2]/div/div/div/div[1]/div/div/div/div[3]/button[2]');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      xpath = By.xpath('/html/body/div/div/div[2]/div/div/div/div[1]/div/div/div/div[3]/button[2]');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/ChooseTutorMatcingOption.js")
    } finally {
    }
  }
}

module.exports = ChooseTutorMatcingOption