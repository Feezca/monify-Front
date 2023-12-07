import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveUsersRoutingModule } from './active-users-routing.module';
import { ActiveUsersComponent } from './active-users.component';


@NgModule({
  declarations: [
    ActiveUsersComponent
  ],
  imports: [
    CommonModule,
    ActiveUsersRoutingModule
  ]
})
export class ActiveUsersModule { }
