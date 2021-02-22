import { AuthGuard } from './guards/auth.guard';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { GameplayComponent } from './components/gameplay/gameplay.component';
import { VideoComponent } from './components/video/video.component';
import { TarjetaInfoComponent } from './components/tarjeta-info/tarjeta-info.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRegistrarseComponent } from './components/login-registrarse/login-registrarse.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'galeria', component: GaleriaComponent , canActivate: [AuthGuard]},
  { path: 'info', component: InfoComponent },
  { path: 'gameplay', component: GameplayComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'loginRes', component: LoginRegistrarseComponent },
  { path: 'tarjeta/:pos', component: TarjetaInfoComponent ,canActivate: [AuthGuard]},
  { path: 'video/:pos', component: VideoComponent ,canActivate: [AuthGuard]},
  { path: 'video/:pos', component: VideoComponent ,canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
