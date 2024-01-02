import { Component, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  authService = inject(AuthService)
  router = inject(Router)
  errorRegister: WritableSignal<boolean> = signal(false);
  cargando = signal(false)

  registerData: RegisterData = {
    Username:"",
    Email:"",
    Password:""
  }

  async register(){
    this.errorRegister.set(false);
    this.cargando.set(true);
    try {
      const res = await this.authService.register(this.registerData);
      if(res.ok){
        this.router.navigate(["/login"])
      }else{
        this.errorRegister.set(true);
      }
    } catch (error) {
      console.warn("Error registrando",error)
    }
    this.cargando.set(false)
  }
}
