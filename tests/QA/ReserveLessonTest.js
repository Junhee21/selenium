const { Builder, By, Key, until } = require('selenium-webdriver');
const ConnectHomePage = require('../../modules/ConnectHomePage')
const SignInFirstQa = require('../../modules/SignInFirstQa');
const ClickSignIn = require('../../modules/pages/student/landing/home/ClickSignIn');
const SignIn = require('../../modules/pages/student/auth/sign-in/SignIn');
const ClickLessons = require('../../modules/pages/student/portal/home/ClickLessons');
const ClickSortByTutor = require('../../modules/pages/student/portal/lessons/ClickSortByTutor');
const SelectTheTutorAndTime = require('../../modules/pages/student/portal/lessons/SelectTheTutorAndTime');
const SelectLessonMaterials = require('../../modules/pages/student/portal/lessons/SelectLessonMaterials');
const CheckMyBookedLessons = require('../../modules/pages/student/portal/lessons/CheckMyBookedLessons');

class ReserveLessonTest {
  constructor(driver, page) {
    this.driver = driver
    this.page = page
  }

  async test() {
    try {
      console.log('Test [Reserve Lesson]');
      await new ConnectHomePage(this.driver, this.page).test();
      await new SignInFirstQa(this.driver, this.page).test();
      await new ClickSignIn(this.driver, this.page).test();
      await new SignIn(this.driver, this.page).test();
      await new ClickLessons(this.driver, this.page).test();
      await new ClickSortByTutor(this.driver, this.page).test();
      await new SelectTheTutorAndTime(this.driver, this.page).test();
      await new SelectLessonMaterials(this.driver, this.page).test();
      await new CheckMyBookedLessons(this.driver, this.page).test();

    } finally {
      console.log("Finish Test")
    }

  }
}
module.exports = ReserveLessonTest 
