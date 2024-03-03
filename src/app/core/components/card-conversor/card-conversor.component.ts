import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Currency, CurrencyConversion } from '../../interfaces/currency';
import { CurrencyService } from '../../services/currency.service';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-card-conversor',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './card-conversor.component.html',
  styleUrls: ['./card-conversor.component.scss']
})
export class CardConversorComponent implements OnInit{

@Input({required:true}) currency!:Currency;
@Input({required : true}) user!:User;

currencyConversion :  CurrencyConversion ={
  UserId: 0,
  ConvertibilityIndexIn: 0,
  ConvertibilityIndexOut: 0,
  Amount: 0
}

userService = inject(UserService);
currencyService= inject(CurrencyService);

currencies: Currency []= []


valorConvertido:string= '';


opcionSeleccionadaIngreso:any;
opcionSeleccionadaEgreso:any;

// Definir una función para asignar la opción seleccionada por el usuario al input de origen
seleccionarMonedaOrigen(e:any){
  this.opcionSeleccionadaIngreso=e.target.value;
}

// Definir una función para asignar la opción seleccionada por el usuario al input de destino
seleccionarMonedaDestino(e:any){
  this.opcionSeleccionadaEgreso=e.target.value;
}

// Definir una función para realizar la conversión de monedas y mostrar el resultado
convert(){
    if (this.opcionSeleccionadaIngreso>=0) {
      // Asignar los valores
      this.currencyConversion.ConvertibilityIndexIn = parseFloat(this.opcionSeleccionadaIngreso) 
      this.currencyConversion.ConvertibilityIndexOut = parseFloat(this.opcionSeleccionadaEgreso) 
      this.currencyConversion.UserId=this.user.id;

      this.currencyService.Conversion(this.currencyConversion)
      .then((res)=>{
        this.valorConvertido = res.toFixed(2);
    })
  }
}


async ngOnInit():Promise<void> {
  this.currencies = await this.currencyService.getAll();
} catch (error:any) {
  console.error('Error al cargar currencies:', error);
}
}
