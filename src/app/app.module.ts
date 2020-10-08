import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {A2sCommModule} from "a2s-comm";
import {SpaceModule} from "./space/space.module";
import {HangarComponent} from "./space/hangar/hangar.component";
import {RadarComponent} from './radar/radar.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    SpaceModule,
    AppRoutingModule,
    A2sCommModule,
    HttpClientModule
  ],
  exports: [
    HangarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
