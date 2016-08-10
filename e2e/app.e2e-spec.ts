import { FirstTestPage } from './app.po';

describe('first-test App', function() {
  let page: FirstTestPage;

  beforeEach(() => {
    page = new FirstTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
