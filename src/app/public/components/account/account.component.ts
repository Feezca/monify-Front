import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, updateUserPlan } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { catchError } from 'rxjs';

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

async updatePlan(){
  try{
    this.userUpdater.conversions=0;
    const res=await this.userService.updatePlan(this.userUpdater);
    if(res){
      alert('Se ha actualizado el plan correctamente.');
      location.reload();
    }
    return res;
  }catch(error){
    console.error('Error al actualizar el plan',error);
    return false;
  }
}

async upgradePlan(){
  try{
    if (this.user.plan < 2) {
      this.userUpdater.plan=this.user.plan+1;
      console.log(this.userUpdater);
      await this.userService.updatePlan(this.userUpdater);
      alert('Se ha mejorado el plan.');
      location.reload();
    } else {
      alert('Tienes la máxima suscripción.');
    }
  } catch (error) {
    console.error('Error al mejorar el plan:', error);
  }
}


save(){
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
