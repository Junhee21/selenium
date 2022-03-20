const { Builder, By, Key, until } = require('selenium-webdriver');

class ClickGoogleAccount {
  constructor(driver) {
    this.driver = driver
  }
  async test() {
    try {
      // Click Google-Account
      let xpath = By.xpath('//*[@id="__next"]/div/div[2]/div/div/div/div/form/div[7]/div[1]/div');
      let element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // pop up 창 선택
      let windows = await this.driver.getAllWindowHandles()
      await this.driver.switchTo().window(windows[1]);      
    } catch {
      console.log("Error - modules/pages/student/auth/sign-in/ClickGoogleAccount.js")
    } finally {
    }
  }
}

module.exports = ClickGoogleAccount