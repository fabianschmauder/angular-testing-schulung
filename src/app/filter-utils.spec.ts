import {matchFilter} from "./filter-utils";


describe('filter utils', () => {
  it('mannschaft match filter', () => {
     const schalkeFilter = matchFilter('Schalke');
      expect(schalkeFilter({TeamName: 'Schalke', Points: 10, TeamIconUrl: ''})).toBeTruthy();
      expect(schalkeFilter({TeamName: 'Schalke 04', Points: 13, TeamIconUrl: ''})).toBeTruthy();
      expect(schalkeFilter({TeamName: '!!!Schalke 04', Points: 14, TeamIconUrl: ''})).toBeTruthy();
  });

  it('mannschaft match filter nicht', () => {
     const schalkeFilter = matchFilter('Schalke');
      expect(schalkeFilter({TeamName: 'Hsv', Points: 10, TeamIconUrl: ''})).toBeFalsy();
      expect(schalkeFilter({TeamName: 'Schalk 04', Points: 13, TeamIconUrl: ''})).toBeFalsy();
      expect(schalkeFilter({TeamName: '!!!Scalke 04', Points: 14, TeamIconUrl: ''})).toBeFalsy();
  });
});
