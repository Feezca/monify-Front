import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardUsersComponent } from '../card-users/card-users.component';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-active-users',
  standalone:true,
  imports:[
    CommonModule,
    CardUsersComponent
  ],
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  userService= inject(UserService)

  users: User[]= []
  activeUsers: User[]= []

  ngOnInit(): void {
    this.userService.getAll().then(res => {
      this.users = res;
      this.activeUsers = this.users.filter(users => users.State === 0);
    })
  }
}
