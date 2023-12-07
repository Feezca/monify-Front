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
  private _authService = inject(AuthService);
  public get authService() {
    return this._authService;
  }
  public set authService(value) {
    this._authService = value;
  }
  router = inject(Router);
  errorLogin = signal(false);
  cargando = signal(false);
  
  loginData: LoginData= {
    username:"",
    password: ""
  }

  login(){
    this.errorLogin.set(false);
    this.cargando.set(true);
    this.authService.login(this.loginData).then(res => {
      if(res) this.router.navigate(["/contacts"]);
      else {
        this.errorLogin.set(true)
      };
      this.cargando.set(false);
    });
  }
}
