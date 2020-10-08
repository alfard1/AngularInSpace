import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpaceImageDirective} from './space-image.directive';


@NgModule({
  declarations: [SpaceImageDirective],
  imports: [
    CommonModule
  ],
  exports: [SpaceImageDirective]
})
export class SharedModule {
}
