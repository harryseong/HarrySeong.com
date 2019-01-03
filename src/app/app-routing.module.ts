import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlacesComponent} from './places/places.component';
import {NavpageComponent} from './navpage/navpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navpage', component: NavpageComponent},
  {path: 'places', component: PlacesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }