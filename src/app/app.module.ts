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
    AppRoutingModule,
    A2sCommModule,
    SpaceModule,
    HttpClientModule
  ],
  exports: [
    HangarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
