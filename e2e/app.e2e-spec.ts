import { Lab1Page } from './app.po';

describe('lab1 App', () => {
  let page: Lab1Page;

  beforeEach(() => {
    page = new Lab1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
