import {FormControl} from "@angular/forms";
import {environment} from "../../environments/environment";
import {ajax} from "rxjs/ajax";
import {map, switchMap} from "rxjs/operators";
import {of, timer} from "rxjs";

export class PilotValidators {

  static pilotName(formControl: FormControl) {
    return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : {pilotName: true};
  }

  // dodalem  timer(500).pipe(switchMap( () => ...) by opóźnić wywołanie kodu o 0.5s by odczekał i nie wysyłał zapytań w trakcie pisania w inpucie
  static pilotForbidden(formControl: FormControl) {
    if (!formControl.value) {
      return of(null);
    }
    const url = `${environment.apiUrl}/forbidden-names?name=${formControl.value}`;
    return timer(500).pipe(switchMap(() =>
      ajax.getJSON<Array<{ name: string }>>(url).pipe(
        map((pilots) => pilots.length > 0 ? {pilotForbidden: true} : null)
      )
    ));
  }


}
