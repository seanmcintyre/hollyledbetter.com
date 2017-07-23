import { HollyPage } from './app.po';

describe('holly App', () => {
  let page: HollyPage;

  beforeEach(() => {
    page = new HollyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
