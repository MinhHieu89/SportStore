import { SportStorePage } from './app.po';

describe('sport-store App', () => {
  let page: SportStorePage;

  beforeEach(() => {
    page = new SportStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
