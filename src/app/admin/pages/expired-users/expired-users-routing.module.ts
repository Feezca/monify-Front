import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpiredUsersModule } from './expired-users.module';

const routes: Routes = [
  {
  path:'',
  component:ExpiredUsersModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpiredUsersRoutingModule { }
