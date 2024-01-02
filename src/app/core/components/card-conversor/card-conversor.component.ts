import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Currency } from '../../interfaces/currency';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-card-conversor',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './card-conversor.component.html',
  styleUrls: ['./card-conversor.component.scss']
})
export class CardConversorComponent implements OnInit{

@Input({required:true}) currency!:Currency;

currencyService= inject(CurrencyService)
// Declarar un arreglo para almacenar las monedas disponibles
currencies: Currency []= []

// Declarar variables para guardar los valores de entrada y salida
valorConvertido:number=0;
valorAConvertir:number=0;

// Declarar variables para guardar las opciones seleccionadas por el usuario
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
  try {  
      // Verificar que la opción seleccionada por el usuario sea válida
      if (this.opcionSeleccionadaIngreso>=0) {
        // Calcular el valor convertido según la tasa de cambio seleccionada y mostrarlo en el input de destino
        const resultado = (this.valorAConvertir * this.opcionSeleccionadaIngreso)/this.opcionSeleccionadaEgreso;
        this.valorConvertido = resultado;
      } else {
        // Lanzar un error si la opción seleccionada por el usuario no es válida
        throw new Error('Índice de convertibilidad no definido.');
      }
    } catch (error:any) {
      // Mostrar un mensaje de error en la consola si ocurre una excepción
      console.error('Error en la conversión:', error.message);
    }
  }


async ngOnInit():Promise<void> {
  this.currencies = await this.currencyService.getAll();
  console.log('Currencies cargados:', this.currencies);
} catch (error:any) {
  console.error('Error al cargar currencies:', error);
}
}
