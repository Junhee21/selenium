const { Builder, By, Key, until, WebElement, Java } = require('selenium-webdriver');

class SignInGoogleId {
  constructor(driver) {
    this.driver = driver
  }
  async test() {
    try {
      require("dotenv").config(); // .env
      console.log('Sign-in with Google-id\n\n');

      let signInButtonXpath = By.xpath('//*[@id="__next"]/div/div[1]/div[1]/nav/div/div[1]/div[2]/div/div[4]/li/a');
      let signInButtonElement = await this.driver.findElement(signInButtonXpath);
      await this.driver.executeScript("arguments[0].click();", signInButtonElement);
      await this.driver.actions().pause(3000).perform();
      await this.driver.wait(until.urlContains('https://www.ringleplus.com/en/student/auth/sign-in'), 10000);
      console.log("----------------sign in page-----------------");
      
      let googleOuathButtonXpath = By.xpath('//*[@id="__next"]/div/div[2]/div/div/div/div/form/div[7]/div[1]/div');
      let googleOuathButtonElement = await this.driver.findElement(googleOuathButtonXpath);
      await this.driver.executeScript("arguments[0].click();", googleOuathButtonElement);
      await this.driver.actions().pause(3000).perform();
      
      // pop up 선택
      console.log("----------------pop up page-----------------");
      let windows = await this.driver.getAllWindowHandles()
      await this.driver.switchTo().window(windows[1]);

      // email 입력
      let emailInputXpath = By.xpath('//*[@id="identifierId"]');
      await this.driver.findElement(emailInputXpath).sendKeys(process.env.RINGLE_GOOGLE_ID);
      
      // 버튼 클릭
      let nextButtonXpath = By.xpath('//*[@id="identifierNext"]/div/button');
      let nextButtonElement = await this.driver.findElement(nextButtonXpath);
      await this.driver.executeScript("arguments[0].click();", nextButtonElement);
      await this.driver.actions().pause(3000).perform();
      
      // 비번 입력
      let passwordInputXpath = By.xpath('//*[@id="password"]/div[1]/div/div[1]/input');
      await this.driver.findElement(passwordInputXpath).sendKeys(process.env.RINGLE_GOOGLE_PW);
      
      // 버튼 클릭
      let buttonXpath = By.xpath('//*[@id="passwordNext"]/div/button');
      let buttonElement = await this.driver.findElement(buttonXpath);
      await this.driver.executeScript("arguments[0].click();", buttonElement);
      await this.driver.actions().pause(20000).perform();
      
    } finally {
    }
  }
}

module.exports = SignInGoogleId