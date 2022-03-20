const { Builder, By, Key, until } = require('selenium-webdriver');

class SignIn {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      // email 입력
      let xpath = By.xpath('//*[@id="__next"]/div/div[2]/div/div/div/div/form/div[1]/input');
      await this.driver.findElement(xpath).sendKeys(process.env.QA_ID);
 
      // 비번 입력
      xpath = By.xpath('//*[@id="__next"]/div/div[2]/div/div/div/div/form/div[2]/input');
      await this.driver.findElement(xpath).sendKeys(process.env.QA_PW);
      
      // 버튼 클릭
      xpath = By.xpath('//*[@id="__next"]/div/div[2]/div/div/div/div/form/div[3]/button');
      let element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
      
      // 로그인 후 페이지 확인
      await this.driver.wait(until.urlContains(this.page + '/en/student/portal/'), 10000);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/auth/sign-in/SignIn.js")
    } finally {
    }
  }
}

module.exports = SignIn