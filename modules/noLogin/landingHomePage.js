const { Builder, By, Key, until } = require('selenium-webdriver');

class LandingHomePage {
  constructor(driver) {
    this.driver = driver
  }

  async test() {
    try {
      console.log('------------------------start---------------------');
      console.log('https://www.ringleplus.com/en/student/landing/home');
      console.log('--------------------------------------------------\n\n');
      
      await this.driver.get('https://www.ringleplus.com/en/student/landing/home');
      
      
      // let by = By.xpath(' //*[@id="headlessui-menu-button-5"]/span/a');
      
      // console.log(by)
      
      // let element = await this.driver.findElement(by);
      // console.log('element,,>', element)
      
      // await this.driver.executeScript("arguments[0].click();", element);
      // await this.driver.actions().pause(1000).perform();
      
      // // await this.driver.wait(until.urlContains('https://www.ringleplus.com/en/student/auth/sign-in'), 10000);
      // await this.driver.wait(until.urlContains('https://ringleplus-en.zendesk.com/hc/en-us'), 10000);
      
      // await this.driver.get('https://www.ringleplus.com/en/student/landing/home');
      // await this.driver.wait(until.urlContains('https://www.ringleplus.com/en/student/landing/home'), 10000);
      
      
      // //4 personalize feedback reports
      // console.log('4 personalize feedback reports')
      // by = By.xpath('//*[@id="__next"]/div/div[2]/div[1]/div[3]/div/div/div[3]/ul/li[2]/div');
      
      // element = await this.driver.findElement(by);
      // await this.driver.executeScript("arguments[0].click();", element);
      
      // //languages
      // console.log('language switch start')
      // by = By.xpath('//*[@id="headlessui-menu-button-8"]');
      // element = await this.driver.findElement(by);
      // await this.driver.executeScript("arguments[0].click();", element);
      // await this.driver.actions().pause(1000).perform();
      
      // // //click japan
      // by = By.xpath('//*[@id="headlessui-menu-item-17"]');
      // element = await this.driver.findElement(by);
      // await this.driver.executeScript("arguments[0].click();", element);
      // await this.driver.actions().pause(500).perform();
      // await this.driver.wait(until.urlContains('ja/student/landing/home'), 100000);
      // await this.driver.actions().pause(1000).perform();
      
    } finally {
      console.log('------------------------end-----------------------');
      console.log('https://www.ringleplus.com/en/student/landing/home');
      console.log('--------------------------------------------------\n\n');
    }

  }
}
module.exports = LandingHomePage 
