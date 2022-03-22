const { Builder, By, Key, until } = require('selenium-webdriver');

class ClickSortByTutor {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      console.log('------------------------------');
      await this.driver.sleep(3000);
      
      let xpath = By.xpath('/html/body/div[1]/div/div[2]/div[1]/div[3]/div/div/div/div[1]/div[1]');
      let element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
      
      console.log('------------------------------');
      xpath = By.xpath('/html/body/div[1]/div/div[2]/div[1]/div/div[1]/div[2]/div/div/a');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
      
      
      console.log('------------------------------');
      await this.driver.sleep(3000);
      
      // lesson 창 확인
      await this.driver.wait(until.urlContains(this.page + '/en/student/portal/lessons/schedule?mode=tutor'), 10000);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/ClickSortByTutor.js")
    } finally {
    }
  }
}

module.exports = ClickSortByTutor