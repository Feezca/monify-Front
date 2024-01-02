import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Currency } from 'src/app/core/interfaces/currency';
import { CurrencyService } from 'src/app/core/services/currency.service';

@Component({
  selector: 'app-card-currency',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './card-currency.component.html',
  styleUrls: ['./card-currency.component.scss']
})
export class CardCurrencyComponent {

  currencyService = inject(CurrencyService);
  @Input({required:true}) currency!:Currency;
  
  async editCurrencyIc(){
    const res = await this.currencyService.edit(this.currency)
    if(res){
      window.location.reload();
    }
  }
  async deleteCurrency(){
    const res = await this.currencyService.delete(this.currency.id)
    if(res){
      window.location.reload();
    }
  }
}
