import { Component, OnInit, inject } from '@angular/core';
import { Currency } from 'src/app/core/interfaces/currency';
import { User } from 'src/app/core/interfaces/user';
import { CurrencyService } from 'src/app/core/services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:User={
    Id: 0,
    Username: "",
    Email:"",
    Conversions:0,
    Plan:0,
    State:0,
    Role: ""

  }
  currencyService= inject(CurrencyService)
  currencies : Currency[]=[]
  
  currency: Currency= {
    id:0,
    name: '',
    convertibilityIndex:0,
    symbol:''
  }

  ngOnInit(): void {
    this.currencyService.getAll().then(res =>{
      this.currencies=res
    })

    const token = localStorage.getItem('token');
    
    if (token) {
      // Decodificar el token (asumiendo que es un token JWT)
      const tokenData = this.parseJwt(token);

      // Extraer el nombre de usuario del token y asignarlo a la propiedad user.Username
      this.user.Username = tokenData.given_name; 
    }
  }
  
  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64));
    return JSON.parse(jsonPayload);
  };
}