import {PilotService} from './pilot.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientMock} from "../../testing/http-client-mock";
import {of} from "rxjs";
import {environment} from "../../environments/environment";
import {Pilot, PilotAttrs} from "./pilot";

fdescribe('PilotService', () => {

  describe('PilotService', () => {
    let pilotService: PilotService
    let http: HttpClientMock;

    // zastępujemy http naszym własnym klientem HttpClientMock
    beforeEach(() => {
      http = new HttpClientMock();
      pilotService = new PilotService(http as HttpClient);
    });

    describe('getPilot', () => {

      // zastępujemy http.get gotową tablicą z naszym pilotem
      beforeEach(() => {
        const pilotAttrs = {id: 1, firstName: 'Mike', lastName: 'Tomsky', imageUrl: ''};
        spyOn(http, 'get').and.returnValue(of(pilotAttrs));
      });

      // czy wywołana jest metoda z argumentami np. metoda save i możemy sprawdzić argumenty z jakimi zapisuje
      it('should make a request for pilot', () => {
        pilotService.getPilot(1);
        expect(http.get).toHaveBeenCalledWith(`${environment.apiUrl}/pilots/1`);
      });

      it('should return pilot object', () => {
        pilotService.getPilot(1).subscribe((pilot) => {
          expect(pilot instanceof Pilot).toBeTruthy();
        });
      });
    });

    describe('savePilot', () => {
      let pilotAttrs: PilotAttrs;

      describe('when pilot has id', () => {
        beforeEach(() => {
          pilotAttrs = {id: 1, firstName: 'Mike', lastName: 'Tomsky', imageUrl: ''};
          spyOn(http, 'put').and.returnValue(of(pilotAttrs));
        });

        it('should make put request', () => {
          pilotService.savePilot(pilotAttrs);
          expect(http.put).toHaveBeenCalledWith(`${environment.apiUrl}/pilots/1`, pilotAttrs);
        });
      });

      describe('when pilot has not id', () => {
        beforeEach(() => {
          pilotAttrs = {id: null, firstName: 'Mike', lastName: 'Tomsky', imageUrl: ''};
          spyOn(http, 'post').and.returnValue(of(pilotAttrs));
        });

        it('should make post request', () => {
          pilotService.savePilot(pilotAttrs);
          expect(http.post).toHaveBeenCalledWith(`${environment.apiUrl}/pilots`, pilotAttrs);
        });
      });

    });
  });


});
