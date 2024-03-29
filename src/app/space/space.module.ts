import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpaceRoutingModule} from './space-routing.module';
import {SpaceShipComponent} from './space-ship/space-ship.component';
import {PilotComponent} from './pilot/pilot.component';
import {PilotRoomComponent} from './pilot-room/pilot-room.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EngineersRoomComponent} from './engineers-room/engineers-room.component';
import {SharedModule} from "../shared/shared.module";
import {DestructionRoomComponent} from './destruction-room/destruction-room.component';
import {PilotFormComponent} from './pilot-form/pilot-form.component';

@NgModule({
  declarations: [SpaceShipComponent, PilotComponent, PilotRoomComponent, EngineersRoomComponent, DestructionRoomComponent, PilotFormComponent],
  exports: [
    SpaceShipComponent,
    PilotRoomComponent,
    EngineersRoomComponent
  ],
  imports: [
    CommonModule, //ngIf, etc.
    SpaceRoutingModule,
    ReactiveFormsModule,
    SharedModule // tutaj ładujemy moduły, sharing jest przez SharedModule
  ]
})
export class SpaceModule {
}
