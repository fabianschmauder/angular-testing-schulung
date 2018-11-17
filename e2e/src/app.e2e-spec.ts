import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should filter', () => {
    page.navigateTo();

    const all = page.findElementsByCss('.mannschaft');
    expect(all.count()).toEqual(18);

    page.getFilterInput().sendKeys('Schal');

    const filtered = page.findElementsByCss('.mannschaft');
    expect(filtered.count()).toEqual(1);

  });
});
