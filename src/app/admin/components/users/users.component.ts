import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardUsersComponent } from '../card-users/card-users.component';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-users',
  standalone:true,
  imports:[
    CommonModule,
    CardUsersComponent
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  userService= inject(UserService)
  users: User[] = [];
  
  user : User ={
    Id: 0,
    Username: "",
    Email: "",
    Conversions: 0,
    Plan: 0,
    State: 0,
    Role:""
  }

  ngOnInit(): void {
    this.userService.getAll().then(res => {
    this.users = res;
    })
  }
}
