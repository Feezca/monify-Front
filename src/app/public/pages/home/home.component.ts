import {  Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Currency } from 'src/app/core/interfaces/currency';
import { User } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:User={
    id: 0,
    username: '',
    email:'',
    conversions:0,
    plan:0,
    state:0,
    role: ''
  }


  enlaceActivo : string = 'Conversor';

  selectedLink(enlace: string): void {
    this.enlaceActivo = enlace;
  }
  
  currencies : Currency[]=[]
  
  currency: Currency= {
    id:0,
    name: '',
    convertibilityIndex:0,
    symbol:''
  }
  // Inyecciones de servicios 
  auth=inject(AuthService);
  router=inject(Router);
  currencyService= inject(CurrencyService);
  userService = inject(UserService);

  cpanel(){
    this.router.navigate(['admin'])
  }
  
  logOut(){
      this.auth.logOut()
      localStorage.removeItem("token");
      this.router.navigate([''])
  }


  selectComponent(e:any){

    const option = e.target.value;

    if(option === "Cerrar sesión"){
      this.logOut();
    }else if (option === "Mi cuenta" && this.enlaceActivo !== 'Cuenta') {
      this.enlaceActivo = 'Cuenta';
  } else if (option === 'Conversor' && this.enlaceActivo !== 'Conversor') {
      this.enlaceActivo = 'Conversor';
  }else if(option==='Dashboard'){
    this.router.navigate(['admin'])
  }
  }
  ngOnInit(): void {
    this.currencyService.getAll().then(res =>{
      this.currencies=res;

    this.userService.getById(this.user.id).then(resUser =>{
      if (resUser) {
        // Asignar los datos obtenidos de la API al objeto user 
        console.log(resUser)
        this.user = resUser;
      } else {
        console.error('Error: El usuario no fue encontrado.');
      }
    })  
    })

    const token = localStorage.getItem('token');
    
    if (token) {
      // Decodificar el token
      const tokenData = this.parseJwt(token);

      // Extraer el nombre de usuario del token y asignarlo a la propiedad user.Username
      this.user.username = tokenData.given_name; 
      this.user.id = tokenData.sub;
    }
  }
  
  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64));
    return JSON.parse(jsonPayload);
  };
}