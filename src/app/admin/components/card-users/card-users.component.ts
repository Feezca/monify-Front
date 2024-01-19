import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-card-users',
  standalone:true,
  imports:[
    CommonModule,
    FormsModule
  ],
  templateUrl: './card-users.component.html',
  styleUrls: ['./card-users.component.scss']
})
export class CardUsersComponent {

  userService= inject(UserService);

  @Input({required:true}) user!:User;

  // estado:number = this.user.State
  
  editUserState(){
    this.user.state = this.user.state === 0 ? 1: 0 ;
  }  
  async saveUser(){
      await this.userService.updatePlan(this.user)
  }
}
