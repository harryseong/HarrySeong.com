import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlacesComponent} from './pages/places/places.component';
import {NavpageComponent} from './pages/navpage/navpage.component';
import {PhotosComponent} from './pages/photos/photos.component';
import {AboutComponent} from './pages/about/about.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {MusicComponent} from './pages/music/music.component';
import {ExperimentalComponent} from './pages/experimental/experimental.component';
import {NavpageSecretComponent} from './pages/navpage-secret/navpage-secret.component';
import {WeatherComponent} from './pages/weather/weather.component';
import {PhotosNavComponent} from './pages/photos/photos-nav/photos-nav.component';
import {PhotosChicagoComponent} from './pages/photos/photos-chicago/photos-chicago.component';
import {PhotosSingaporeComponent} from './pages/photos/photos-singapore/photos-singapore.component';
import {PhotosMinnesotaComponent} from './pages/photos/photos-minnesota/photos-minnesota.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nav', component: NavpageComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'music', component: MusicComponent},
  {path: 'photos', component: PhotosComponent,
    children: [
      {path : '', component: PhotosNavComponent},
      {path : 'durian', component: PhotosSingaporeComponent},
      {path : 'momo', component: PhotosMinnesotaComponent},
      {path : 'asbjorn', component: PhotosChicagoComponent},
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'secret/nav', component: NavpageSecretComponent},
  {path: 'secret/x', component: ExperimentalComponent},
  {path: '**', component: PageNotFoundComponent}
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
