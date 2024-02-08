import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, deleteUser } from 'src/app/core/interfaces/user';
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
  deleteUser: deleteUser={
    id:0,
    userState:0
  }

  @Input({required:true}) user!:User;
  
  editUserState(){
    this.user.state = this.user.state === 0 ? 1: 0 ;
  }  
  async saveUser(){
    try{
      this.deleteUser.id= this.user.id;
      this.deleteUser.userState=this.user.state;
      await this.userService.updateState(this.deleteUser);
      window.location.reload();      
    }catch(err){
      console.error(err)
    }
  }
}
