const { Builder, By, Key, until } = require('selenium-webdriver');

class SignIn {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      // email 입력
      await this.driver.findElement(By.css("input[type='email']")).sendKeys(process.env.QA_ID);

      // 비번 입력
      await this.driver.findElement(By.css("input[type='password']")).sendKeys(process.env.QA_PW);

      // 버튼 클릭
      let element = await this.driver.findElement(By.css("button[tabindex='3']"));
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // 로그인 후 페이지 확인
      await this.driver.wait(until.urlContains(this.page + '/en/student/portal/home'), 10000);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/auth/sign-in/SignIn.js")
    } finally {
    }
  }
}

module.exports = SignIn