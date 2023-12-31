import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardiaGuard } from './guardia.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [GuardiaGuard]
  },

  {
    path: 'homeprof',
    loadChildren: () => import('./homeprof/homeprof.module').then( m => m.HomeprofPageModule),
    canActivate: [GuardiaGuard]
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  
  {
    path: 'mostrarqr',
    loadChildren: () => import('./mostrarqr/mostrarqr.module').then( m => m.MostrarqrPageModule),
    canActivate: [GuardiaGuard]
  },

  {
    path: '**',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },


  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

