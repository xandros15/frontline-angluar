import { FrontlinePage } from './app.po';

describe('frontline App', () => {
  let page: FrontlinePage;

  beforeEach(() => {
    page = new FrontlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
