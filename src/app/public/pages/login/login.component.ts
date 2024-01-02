import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  authService = inject(AuthService);
  router = inject(Router);

  errorLogin = signal(false);
  cargando = signal(false);
  
  loginData: LoginData= {
    Username:"",
    Password: ""
  }

  login(){
    this.errorLogin.set(false);
    this.cargando.set(true);
    this.authService.login(this.loginData).then(res => {
      if(res) this.router.navigate(["/home"]);
      else {
        this.errorLogin.set(true)
      };
      this.cargando.set(false);
    });
  }
}
