import { PlexIssuesPage } from './app.po';

describe('plex-issues App', () => {
  let page: PlexIssuesPage;

  beforeEach(() => {
    page = new PlexIssuesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('plexissues works!');
  });
});
