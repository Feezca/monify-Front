import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUser } from './core/guards/loggedUser';
import { adminGuard } from './core/guards/admin.guard';
// import { LoggedAdmin } from './core/guards/loggedAdmin';

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
    canActivate:[LoggedUser],
    loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule)
  },    
  {
    path:"admin",
    canActivate:[LoggedUser,adminGuard],
    loadChildren: () => import('./admin/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
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
