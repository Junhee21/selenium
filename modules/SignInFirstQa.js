const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');

class SignInFirstQa {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    try {
      // Enter User-Id
      let xpath = By.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div/form/div[1]/input');
      await this.driver.findElement(xpath).sendKeys(process.env.QA_FIRST_ID);

      // Enter Password
      xpath = By.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div/form/div[2]/input');
      await this.driver.findElement(xpath).sendKeys(process.env.QA_FIRST_PW);
      
      // Click Sign In button 
      xpath = By.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/div/form/input[3]')
      let element = await this.driver.findElement(xpath);
      await this.driver.executeScript("arguments[0].click();", element);
      await this.driver.actions().pause(3000).perform();

      // 로그인 후 페이지 확인
      await this.driver.wait(until.urlContains(this.page + '/en/student/landing/home'), 10000);
    } catch {
      console.log("Error - modules/SignInFirstQa.js")
    } finally {
    }
  }
}

module.exports = SignInFirstQa