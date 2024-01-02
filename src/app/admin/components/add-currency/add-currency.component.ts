import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Currency, CurrencyForCreation } from 'src/app/core/interfaces/currency';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-currency',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss']
})
export class AddCurrencyComponent {

  currencyService= inject(CurrencyService);

  newCurrency:CurrencyForCreation={
    name:"",
    symbol:"",
    convertibilityIndex:0
  }

  async createCurrency(){
    const res= await this.currencyService.create(this.newCurrency)
    if(res){
      window.location.reload();
    }
    console.log("REGISTRANDO",this.newCurrency)
  };
}
