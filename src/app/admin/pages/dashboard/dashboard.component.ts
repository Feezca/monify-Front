import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  auth=inject(AuthService)
  router=inject(Router)
  
  enlaceActivo: string = 'Monedas'; 
  
  selectedLink(enlace: string): void {
    this.enlaceActivo = enlace;
  }

  logOut(){
    this.auth.logOut()
    localStorage.removeItem("token");
    this.router.navigate([''])
  }
  
}
