import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFilterInput() {
    return element(by.id('filterInput'));
  }

  findElementsByCss(css: string){
    return element.all(by.css(css));
  }

  wait(time:number){
    browser.sleep(time);
  }
}
