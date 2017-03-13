import { NgbookR54Page } from './app.po';

describe('ngbook-r54 App', () => {
  let page: NgbookR54Page;

  beforeEach(() => {
    page = new NgbookR54Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
