import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {BigimageComponent} from '../bigimage/bigimage.component';
import {SmallimageComponent} from '../smallimage/smallimage.component';
import {DetailComponent} from '../detail/detail.component';
import {AboutComponent} from '../about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/smallimage/larnach', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'smallimage/larnach', component: SmallimageComponent},
  {path: 'smallimage/paris', component: SmallimageComponent},
  {path: 'smallimage/spain', component: SmallimageComponent},
  {path: 'smallimage/dianatribute', component: SmallimageComponent},
  {path: 'detail/:i', component: DetailComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
