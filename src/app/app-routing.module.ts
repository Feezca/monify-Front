import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUser } from './core/guards/loggedUser';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./core/pages/root/root.module').then( m => m.RootModule)
  },
  {
    path:"login",
    loadChildren: ()=> import('./public/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:"register",
    loadChildren: () => import('./public/pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path:"home",
    // canActivate:[loggedUser],
    loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule)
  },    
  {
    path:"admin",
    // canActivate:[loggedAdmin],
    loadChildren: () => import('./admin/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:"monedas",
    // canActivate:[loggedAdmin],
    loadChildren: () => import('./admin/pages/monedas/monedas.module').then(m => m.MonedasModule)
    },
  {
    path:"users",
    // canActivate:[loggedAdmin],
    loadChildren: () => import('./admin/pages/users/users.module').then(m => m.UsersModule)
    },
  {
    path:"active",
    // canActivate:[loggedAdmin],
    loadChildren: () => import('./admin/pages/active-users/active-users.module').then(m => m.ActiveUsersModule)
    },
  {
    path:"expired",
    // canActivate:[loggedAdmin],
    loadChildren: () => import('./admin/pages/expired-users/expired-users.module').then(m => m.ExpiredUsersModule)
    },
  { 
    path: "",
    redirectTo: 'login',
    pathMatch: "full"
  },
  {
    path:"**",
    loadChildren: ()=> import('./public/pages/error/error.module').then(m => m.ErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
