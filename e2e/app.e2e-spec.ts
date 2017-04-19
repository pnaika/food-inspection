import { FoodInspectionAppPage } from './app.po';

describe('food-inspection-app App', () => {
  let page: FoodInspectionAppPage;

  beforeEach(() => {
    page = new FoodInspectionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
