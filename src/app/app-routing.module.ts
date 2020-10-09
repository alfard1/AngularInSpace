import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlackHoleComponent} from "./black-hole/black-hole.component";

const routes: Routes = [
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: 'intel', loadChildren: () => import(`./intel/intel.module`).then(m => m.IntelModule)}, // rout ładuje lazy-loadingiem moduł IntelModule
  {path: '**', component: BlackHoleComponent} // widecard, zawsze na końcu, przekierowuje na 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
