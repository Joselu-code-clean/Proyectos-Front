//Modulos de Angular.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; 

// Modulos para facebook
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AngularFireAuthModule } from '@angular/fire/auth'; 
import { environment } from '../environments/environment';

//Modulos de mis componentes.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { GridComponent } from './components/grid/grid.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaPoster } from './pipes/pelicula-poster.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { PeliculaBackdropPipe } from './pipes/pelicula-backdrop.pipe';
import { GaleriasComponent } from './components/galerias/galerias.component';
import { PipesPipe } from './pipes/pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    TitleComponent,
    GridComponent,
    TarjetasComponent,
    SearchComponent,
    PeliculaPoster,
    MovieComponent,
    PeliculaBackdropPipe,
    GaleriasComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
