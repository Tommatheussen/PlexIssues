import { browser, element, by } from 'protractor';

export class PlexIssuesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('plexissues-root h1')).getText();
  }
}
