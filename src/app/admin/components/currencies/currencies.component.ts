import { Component, OnInit, inject } from '@angular/core';
import { CardCurrencyComponent } from '../card-currency/card-currency.component';
import { CommonModule } from '@angular/common';
import { Currency } from 'src/app/core/interfaces/currency';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { AddCurrencyComponent } from '../add-currency/add-currency.component';

@Component({
  selector: 'app-currencies',
  standalone:true,
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
  imports:[
    CommonModule,
    CardCurrencyComponent,
    AddCurrencyComponent
  ]
})
export class CurrenciesComponent implements OnInit {

currencyService= inject(CurrencyService)
currencies: Currency[]=[]

currency: Currency={
  id: 0,
  symbol:"",
  name: "",
  convertibilityIndex: 0
}
  
  ngOnInit(): void {
    this.currencyService.getAll().then(res => {
    this.currencies = res;
    })
  }
}
