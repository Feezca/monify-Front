import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpiredUsersRoutingModule } from './expired-users-routing.module';
import { ExpiredUsersComponent } from './expired-users.component';


@NgModule({
  declarations: [
    ExpiredUsersComponent
  ],
  imports: [
    CommonModule,
    ExpiredUsersRoutingModule
  ]
})
export class ExpiredUsersModule { }
