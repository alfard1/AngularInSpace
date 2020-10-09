import {PilotValidators} from './pilot-validators';
import {FormControl} from "@angular/forms";
import {ajax} from "rxjs/ajax";
import {of} from "rxjs";

//poziom 1: klasa ktorą testujemy, można dodać f, tj. dać "fdescribe" by testowało tylko tą klasę, przed commitem powinniśmy usunąć "f"
describe('PilotValidators', () => {

  //poziom 2: metoda którą testujemy
  describe('pilotName', () => {

    //poziom 3: co dokładnie testujemy, można napisać "descr i Tab" i utworzy kod, poruszamy się tabem
    describe('when value is empty', () => {
      it('should return null', () => {
        const control = new FormControl('');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe('when starts from uppercase letter', () => {
      it('should return null', () => {
        const control = new FormControl('Adam');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe('when starts from lowcase letter', () => {
      it('should return validation object', () => {
        const control = new FormControl('adam');
        expect(PilotValidators.pilotName(control)).toEqual({pilotName: true});
      });
    });

  });

  describe('pilotForbidden', () => {
    describe('when value is empty', () => {
      it('should return observable with null', () => {
        const control = new FormControl('');
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toBeNull());
      });
    });
    describe('when value is forbidden', () => {
      it('should return observable with validation object', () => {
        const control = new FormControl('xxx');
        // mokujemy by nie było łączenia z bazą
        spyOn(ajax, 'getJSON').and.returnValue(of([{name: 'xxx'}]));
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toEqual({pilotForbidden: true}));
      });
    });
    describe('when value is not forbidden', () => {
      it('should return observable with null', () => {
        const control = new FormControl('Adama');
        spyOn(ajax, 'getJSON').and.returnValue(of([]));
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toBeNull());
      });
    });
  });

});
