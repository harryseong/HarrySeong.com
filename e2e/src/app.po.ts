import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(endpoint: string) {
    return browser.get('/' + endpoint);
  }

  getElementTextByClass(elementClass: string) {
    return element(by.css(elementClass)).getAttribute('textContent');
  }
}
