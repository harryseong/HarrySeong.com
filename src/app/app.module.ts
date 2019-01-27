import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { PlacesComponent } from './pages/places/places.component';
import { FooterComponent } from './footer/footer.component';
import { NavpageComponent } from './pages/navpage/navpage.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {TypingAnimationModule} from 'angular-typing-animation';
import { MusicComponent } from './pages/music/music.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UnderContructionComponent } from './under-contruction/under-contruction.component';
import { ExperimentalComponent } from './pages/experimental/experimental.component';
import { NavpageSecretComponent } from './pages/navpage-secret/navpage-secret.component';
import { PageHeaderComponent } from './pages/page-header/page-header.component';
import { DinoComponent } from './pages/experimental/dino/dino.component';
import { PageHeaderDialogComponent } from './pages/page-header/page-header-dialog/page-header-dialog.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { PhotosNavComponent } from './pages/photos/photos-nav/photos-nav.component';
import { PhotosChicagoComponent } from './pages/photos/photos-chicago/photos-chicago.component';
import { PhotosSingaporeComponent } from './pages/photos/photos-singapore/photos-singapore.component';
import { PhotosMinnesotaComponent } from './pages/photos/photos-minnesota/photos-minnesota.component';
import { PhotosHeaderComponent } from './pages/photos/photos-header/photos-header.component';
import { PhotosGalleryComponent } from './pages/photos/photos-gallery/photos-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PlacesComponent,
    FooterComponent,
    NavpageComponent,
    PhotosComponent,
    AboutComponent,
    PageNotFoundComponent,
    MusicComponent,
    UnderContructionComponent,
    ExperimentalComponent,
    NavpageSecretComponent,
    PageHeaderComponent,
    DinoComponent,
    PageHeaderDialogComponent,
    WeatherComponent,
    PhotosNavComponent,
    PhotosChicagoComponent,
    PhotosSingaporeComponent,
    PhotosMinnesotaComponent,
    PhotosHeaderComponent,
    PhotosGalleryComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, environment.firebase.projectId),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    TypingAnimationModule,
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    PageHeaderDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
