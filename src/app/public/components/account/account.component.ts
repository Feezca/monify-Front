import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, updateUserPlan } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
@Input ({required:true}) user!:User;

userService=inject(UserService);
router=inject(Router);

suscripcion: string[] = ['Free','Trial','Pro'];
nivelSuscripcion: string = '';

userUpdater: updateUserPlan={
  id:0,
  conversions: 0,
  plan:0
}

suscription(){
  this.nivelSuscripcion = this.suscripcion[this.user.plan];
}

async setPlan(selectedPlan:number){
  try{
    switch (selectedPlan) {
      case 0:
        this.userUpdater.plan = 0 ;
        this.userUpdater.conversions = 10;
        break;
        case 1:
          this.userUpdater.plan = 1 ;
          this.userUpdater.conversions = 20;
          break;
          case 2:
            this.userUpdater.plan = 2 ;
            this.userUpdater.conversions = 25000;
        break;
    
      default:
        break;
    }      
    const result= await this.userService.updatePlan(this.userUpdater);
    if(result){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu plan fue modificado con éxito!",
        showConfirmButton: false,
        timer: 1800
      });
    }
  } catch (error) {
    console.error('Error al mejorar el plan:', error);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Error!",
      text:"Al parecer hubo un error al modificar tu plan. Intenta más tarde.",
      showConfirmButton: false,
      timer: 1500
    });
  }
}

salir(){
  window.location.reload();
}

ngOnInit(): void {
  this.suscription();
  if (this.user) {
    this.userUpdater.id = this.user.id;
    this.userUpdater.conversions = this.user.conversions;
    this.userUpdater.plan = this.user.plan;
  }
}
}
