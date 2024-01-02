import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardCurrencyClientComponent } from '../../components/card-currency-client/card-currency-client.component';
import { CardConversorComponent } from 'src/app/core/components/card-conversor/card-conversor.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardCurrencyClientComponent,
    CardConversorComponent
  ]
})
export class HomeModule { }
