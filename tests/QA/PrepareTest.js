const { Builder, By, Key, until } = require('selenium-webdriver');
const ConnectHomePage = require('../../modules/ConnectHomePage')
const SignInFirstQa = require('../../modules/SignInFirstQa');
const ClickSignIn = require('../../modules/pages/student/landing/home/ClickSignIn');
const SignIn = require('../../modules/pages/student/auth/sign-in/SignIn');
const ClickLessons = require('../../modules/pages/student/portal/home/ClickLessons');
const GoPrepare = require('../../modules/pages/student/portal/lessons/GoPrepare');
const ListenMP3 = require('../../modules/pages/student/portal/lessons/preparation/ListenMP3');
const ChooseClassQuestions = require('../../modules/pages/student/portal/lessons/preparation/ChooseClassQuestions');
const ReadInsight = require('../../modules/pages/student/portal/lessons/preparation/ReadInsight');
const OutPreparation = require('../../modules/pages/student/portal/lessons/preparation/OutPreparation');
const WatchVideo = require('../../modules/pages/student/portal/lessons/preparation/WatchVideo');

class PrepareTest {
  constructor(driver, page) {
    this.driver = driver
    this.page = page
  }

  async test() {
    try {
      console.log('Test [Prepare]');
      await new ConnectHomePage(this.driver, this.page).test();
      await new SignInFirstQa(this.driver, this.page).test();
      await new ClickSignIn(this.driver, this.page).test();
      await new SignIn(this.driver, this.page).test();
      await new ClickLessons(this.driver, this.page).test();
      await new GoPrepare(this.driver, this.page).test()
      await new ChooseClassQuestions(this.driver, this.page).test()
      await new ReadInsight(this.driver, this.page).test()
      await new ListenMP3(this.driver, this.page).test()
      await new WatchVideo(this.driver, this.page).test()
      await new OutPreparation(this.driver, this.page).test()
    } finally {
      console.log("Finish Test")
    }

  }
}
module.exports = PrepareTest 
