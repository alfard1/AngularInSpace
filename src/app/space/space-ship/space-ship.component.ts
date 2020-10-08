import {Component, Input, OnInit} from '@angular/core';
import {SpaceShip} from "../space-ship";
import {OrderFormValue} from "../order-form-value";
import {interval, Observable} from "rxjs";
import {SpaceShipType} from "../space-ship-type.enum";
import {FighterShip} from "../fighter-ship";
import {BomberShip} from "../bomber-ship";
import {SpaceShipService} from "../space-ship.service";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {

  @Input() spaceShip: SpaceShip;

  constructor() { }

  ngOnInit(): void {
  }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
    );
  }

}
