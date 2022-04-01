const { Builder, By, Key, until } = require('selenium-webdriver');

class SelectTheTutorAndTime {
  constructor(driver, page) {
    this.driver = driver;
    this.page = page;
  }
  async test() {
    let element = null
    let elements = null
    let isChoosen = false;

    try {
      // 주말인 경우는 이번주에 수업이 없어서 다음주 클릭
      await this.driver.sleep(5000)
      let elements = await this.driver.findElements(By.css("button[class='appearance-none box-border focus:outline-none cursor-pointer']"))
      await this.driver.executeScript("arguments[0].click();", elements[4]);
      await this.driver.actions().pause(3000).perform();


      // 수업이 있는 튜터가 있을 때까지 반복
      // 튜터 클릭하는 버튼들
      let tutorElements = await this.driver.findElements(By.css("a[class='tutor-box hover:bg-gray-100 cursor-pointer']"))


      for (let tutorElement of tutorElements) {
        if (isChoosen) break;

        await this.driver.executeScript("arguments[0].click();", tutorElement);
        await this.driver.actions().pause(3000).perform();

        // 수업 선택하는 것
        let timeElements = await this.driver.findElements(By.css("div[class='slot-status-text']"))

        for (let timeElement of timeElements) {
          if (isChoosen) break;

          let text = await timeElement.getText();

          if (text === 'Available') {
            isChoosen = true
            element = await timeElement.findElement(By.xpath("./../.."));
            const actions = this.driver.actions({ async: true });
            await actions.move({ origin: element }).perform();
            await this.driver.sleep(5000)

            element = await element.findElement(By.xpath("./div[1]"));
            await this.driver.executeScript("arguments[0].click();", element);
            await this.driver.actions().pause(3000).perform();
          }
        }
        // choose Day

      }
      elements = await this.driver.findElements(By.css("button[class='appearance-none box-border focus:outline-none cursor-pointer']"));
      await this.driver.executeScript("arguments[0].click();", elements[0]);
      await this.driver.actions().pause(3000).perform();
    } catch {
      console.log("Error - modules/pages/student/portal/lessons/SelectTheTutorAndTime.js")
    } finally {
    }
  }
}

module.exports = SelectTheTutorAndTime