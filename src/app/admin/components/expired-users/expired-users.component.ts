import { Component, OnInit, inject } from '@angular/core';
import { CardUsersComponent } from '../card-users/card-users.component';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-expired-users',
  standalone:true,
  imports:[
    CommonModule,
    CardUsersComponent
  ],
  templateUrl: './expired-users.component.html',
  styleUrls: ['./expired-users.component.scss']
})
export class ExpiredUsersComponent implements OnInit {

  userService= inject(UserService)

  users: User[]= []
  expiredUsers: User[]= []

  ngOnInit(): void {
    this.userService.getAll().then(res => {
      this.users = res;
      this.expiredUsers = this.users.filter(user => user.State === 1);
    })
  }


}
