const { Builder, By, Key, until } = require('selenium-webdriver');

class ClickSignIn {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      // Click Sign-In button
      let element = await this.driver.findElement(By.css("a[href='/en/student/auth/sign-in']"));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // Sign-in page로 이동했는지 확인
      await this.driver.wait(until.urlContains(this.page + '/en/student/auth/sign-in'), 10000);
    } catch {
      console.log("Error - modules/pages/student/landing/home/ClickSignIn.js")
    } finally {
    }
  }
}

module.exports = ClickSignIn