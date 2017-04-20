import { ClarityTestPage } from './app.po';

describe('clarity-test App', () => {
  let page: ClarityTestPage;

  beforeEach(() => {
    page = new ClarityTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
