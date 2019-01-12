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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nav', component: NavpageComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'music', component: MusicComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'about', component: AboutComponent},
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
