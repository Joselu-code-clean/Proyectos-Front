import { APP_ROUTING } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/info/info.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { GameplayComponent } from './components/gameplay/gameplay.component';
import { VideoComponent } from './components/video/video.component';
import { TarjetaInfoComponent } from './components/tarjeta-info/tarjeta-info.component';
import { LoginRegistrarseComponent } from './components/login-registrarse/login-registrarse.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {path: 'home' , component: HomeComponent, canActivate: [AuthGuard]  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    InfoComponent,
    GaleriaComponent,
    GameplayComponent,
    VideoComponent,
    TarjetaInfoComponent,
    LoginRegistrarseComponent
  ],
  imports: [
    APP_ROUTING,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
