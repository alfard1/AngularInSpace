import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';


@NgModule({
    declarations: [SpaceShipComponent],
    exports: [
        SpaceShipComponent
    ],
    imports: [
        CommonModule,
        SpaceRoutingModule
    ]
})
export class SpaceModule { }
