import { UserSystemPage } from './app.po';

describe('user-system App', function() {
  let page: UserSystemPage;

  beforeEach(() => {
    page = new UserSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
