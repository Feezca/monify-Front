import { Component, Input, inject } from '@angular/core';
import { Currency } from 'src/app/core/interfaces/currency';

@Component({
  selector: 'app-card-currency-client',
  standalone:true,
  templateUrl: './card-currency-client.component.html',
  styleUrls: ['./card-currency-client.component.scss']
})
export class CardCurrencyClientComponent {
  
  @Input({required:true}) currency!:Currency;

}
