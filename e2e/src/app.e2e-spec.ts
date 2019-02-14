import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('HarrySeong Portfolio App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should have a title', () => {
    page.navigateTo('');
    expect(browser.getTitle()).toEqual('HarrySeong');
  });

  it('Should display welcome message', () => {
    page.navigateTo('');
    expect(page.getElementTextByClass('.info-box-header')).toEqual('welcome');
  });
});
