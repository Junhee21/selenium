const { Builder, By, Key, until } = require('selenium-webdriver');
const ConnectHomePage = require('../../modules/ConnectHomePage')
const SignInFirstQa = require('../../modules/SignInFirstQa');
const ClickSignIn = require('../../modules/pages/student/landing/home/ClickSignIn');
const SignIn = require('../../modules/pages/student/auth/sign-in/SignIn');
const ClickLessons = require('../../modules/pages/student/portal/home/ClickLessons');
const ClickSortByTutor = require('../../modules/pages/student/portal/lessons/ClickSortByTutor');
const ChooseTutorTime = require('../../modules/pages/student/portal/lessons/ChooseTutorTime');
const ChooseBook = require('../../modules/pages/student/portal/lessons/ChooseBook');
const ChooseTutorMatcingOption = require('../../modules/pages/student/portal/lessons/ChooseTutorMatchingOption');

class ReserveLessonTest {
  constructor(driver, page) {
    this.driver = driver
    this.page = page
  }

  async test() {
    try {
      console.log('Test [Reserve Lesson]\n\n');
      await new ConnectHomePage(this.driver, this.page).test();
      await new SignInFirstQa(this.driver, this.page).test();
      await new ClickSignIn(this.driver, this.page).test();
      await new SignIn(this.driver, this.page).test();
      await new ClickLessons(this.driver, this.page).test();
      await new ClickSortByTutor(this.driver, this.page).test();
      await new ChooseTutorTime(this.driver, this.page).test();
      await new ChooseBook(this.driver, this.page).test();
      await new ChooseTutorMatcingOption(this.driver, this.page).test();

    } finally {
      console.log("Finish Test")
    }

  }
}
module.exports = ReserveLessonTest 
