import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/guard-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'category',
    loadChildren: () => import('./components/category/category.module').then( m => m.CategoryPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'routine-list',
    loadChildren: () => import('./components/routine-list/routine-list.module').then( m => m.RoutineListPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'exercise-list',
    loadChildren: () => import('./components/exercise-list/exercise-list.module').then( m => m.ExerciseListPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'training',
    loadChildren: () => import('./components/training/training.module').then( m => m.TrainingPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'relax-time',
    loadChildren: () => import('./components/relax-time/relax-time.module').then( m => m.RelaxTimePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'finish-screen',
    loadChildren: () => import('./components/finish-screen/finish-screen.module').then( m => m.FinishScreenPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'introduccion',
    loadChildren: () => import('./components/introduccion/introduccion.module').then( m => m.IntroduccionPageModule)
  },
  {
    path: 'my-routine', 
    loadChildren: () => import('./components/my-routine/my-routine.module').then( m => m.MyRoutinePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'load-windows',
    loadChildren: () => import('./components/load-windows/load-windows.module').then( m => m.LoadWindowsPageModule), canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }