import { AppNewPage } from './app.po';

describe('app-new App', function() {
  let page: AppNewPage;

  beforeEach(() => {
    page = new AppNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
