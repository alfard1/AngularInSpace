import {ShipProduction} from './ship-production.po';

// test End2End, wymaga odpalenia aplikacji, tylko kluczowe funkcjonalności, krytyczne dla biznesu np. składanie zamówienia
describe('Ship production', () => {
  let page: ShipProduction;

  beforeEach(() => {
    page = new ShipProduction();
    page.nagivateTo();
  });

  describe('when performed ship production', () => {
    beforeEach(() => {
      page.setShipQuantity(1);
      page.setFighterType();
      page.submitProduceForm();
    });

    it('should render produced ship', () => {
      expect(page.getShipsCount()).toEqual(1);
    });
  });
});
