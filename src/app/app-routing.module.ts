import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlacesComponent} from './pages/places/places.component';
import {NavpageComponent} from './navpage/navpage.component';
import {PhotosComponent} from './pages/photos/photos.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navpage', component: NavpageComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'about', component: AboutComponent},
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
