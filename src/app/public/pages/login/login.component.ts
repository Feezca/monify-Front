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

  login() {
    this.errorLogin.set(false); // Reinicia el indicador de error de inicio de sesión
    this.cargando.set(true); // Muestra un indicador de carga durante el inicio de sesión
  
    this.authService.login(this.loginData).then(res => { // Realiza la llamada al servicio de autenticación para iniciar sesión
      if (res) { // Si el inicio de sesión es exitoso
        const token = localStorage.getItem('token'); // Obtiene el token del localStorage
  
        if (token) { // Si se encuentra un token en el localStorage
          const decodedToken = this.authService.decodedToken(token); // Decodifica el token para obtener la información del usuario
  
          if (decodedToken) { // Si se pudo decodificar el token correctamente
            const role = decodedToken.role; // Obtiene el rol del usuario del token decodificado
  
            if (role === 'Admin') { // Si el rol es 'admin'
              this.router.navigate(['/admin']); // Redirige a la página de administrador
            } else if (role === 'User') { // Si el rol es 'user'
              this.router.navigate(['/home']); // Redirige a la página de usuario
            } else {
              alert("No tienes permisos para acceder a esta plataforma"); // Muestra un mensaje de alerta si el rol no es ni 'admin' ni 'user'
            }
          } else {
            // Si no se pudo decodificar el token, puedes manejarlo según tus necesidades
          }
        } else {
          // Si no se encuentra un token en el localStorage, puedes manejarlo según tus necesidades
        }
      } else { // Si el inicio de sesión no es exitoso
        this.errorLogin.set(true); // Establece el indicador de error de inicio de sesión en true
      }
  
      this.cargando.set(false); // Oculta el indicador de carga después del inicio de sesión
    });
  }
  
}
