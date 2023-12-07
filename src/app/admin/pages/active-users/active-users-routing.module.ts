import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUsersModule } from './active-users.module';

const routes: Routes = [{
  path:"",
  component:ActiveUsersModule
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveUsersRoutingModule { }
