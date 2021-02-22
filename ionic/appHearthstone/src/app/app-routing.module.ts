import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guard/auth-guard.service';

const routes: Routes = [
  // Pagina por defecto al home
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [ AuthGuardService ] },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule), canActivate: [ AuthGuardService ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'setting-user',
    loadChildren: () => import('./pages/setting-user/setting-user.module').then( m => m.SettingUserPageModule)
    , canActivate: [ AuthGuardService ]
  },
  {
    path: 'unit-card',
    loadChildren: () => import('./pages/unit-card/unit-card.module').then( m => m.UnitCardPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule), canActivate: [ AuthGuardService ]
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
