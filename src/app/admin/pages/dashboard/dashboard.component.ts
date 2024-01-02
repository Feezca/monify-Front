import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  
  enlaceActivo: string = 'Monedas'; 
  
  selectedLink(enlace: string): void {
    this.enlaceActivo = enlace;
  }

  
}
