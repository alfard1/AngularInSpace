import {Pilot} from "./pilot";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {PilotService} from "./pilot.service";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class PilotResolver implements Resolve<Pilot> {

  constructor(private pilotService: PilotService) {
  }

  // wywołuje metodę getPilot(id) (gdy id pilota jest obecne) lub zwraca nową instancję klasy Pilot
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pilot> {
    if (route.params.id === 'new') {
      return of(new Pilot());
    } else {
      return this.pilotService.getPilot(route.params.id);
    }
  }
}
