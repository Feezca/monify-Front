import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ExpiredUsersComponent } from '../../components/expired-users/expired-users.component';
import { UsersComponent } from '../../components/users/users.component';
import { ActiveUsersComponent } from '../../components/active-users/active-users.component';
import { CurrenciesComponent } from '../../components/currencies/currencies.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ExpiredUsersComponent,
    UsersComponent,
    ActiveUsersComponent,
    CurrenciesComponent,
  ]
})
export class DashboardModule { }
