const { Builder, By, Key, until } = require('selenium-webdriver');

class SignInGoogleAccount {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      // email 입력
      let xpath = By.xpath('//*[@id="identifierId"]');
      await this.driver.findElement(xpath).sendKeys(process.env.RINGLE_GOOGLE_ID);

      // 다음 버튼 클릭
      xpath = By.xpath('//*[@id="identifierNext"]/div/button');
      let element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();
      
      // 비번 입력
      xpath = By.xpath('//*[@id="password"]/div[1]/div/div[1]/input');
      await this.driver.findElement(xpath).sendKeys(process.env.RINGLE_GOOGLE_PW);
      
      // 버튼 클릭
      xpath = By.xpath('//*[@id="passwordNext"]/div/button');
      element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // 로그인 팝업 페이지에서 링글 페이지로 전환
      let windows = await this.driver.getAllWindowHandles()
      await this.driver.switchTo().window(windows[0]);   

      // 로그인 후 페이지 확인
      await this.driver.wait(until.urlContains(this.page + '/en/student/portal/'), 10000);
    } catch {
      console.log("Error - modules/pages/student/auth/sign-in/SignInGoogleAccount.js")
    } finally {
    }
  }
}

module.exports = SignInGoogleAccount