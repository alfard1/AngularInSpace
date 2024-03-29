import {browser, by, element} from 'protractor';

export class ShipProduction {
  nagivateTo() {
    browser.get('/space');
  }

  setShipQuantity(number: number) {
    const input = element(by.css('[formcontrolname="shipCount"]'));
    input.clear().then(() => input.sendKeys(number));
  }

  setFighterType() {
    // łapiemy referencję po CSSach
    const radios = element.all(by.css(`[formcontrolname="shipType"]`));
    radios.first().click();
  }

  submitProduceForm() {
    // wyszukuję button po treści przycisku
    const button = element(by.buttonText('Produkuj'));
    button.click();
  }

  getShipsCount() {
    const ships = element.all(by.css('app-space-ship'));
    return ships.count();
  }
}
