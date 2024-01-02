import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../interfaces/user';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  async edit( user : User ) : Promise<boolean> {
    if( !user.Id ) 
      return false;
      const res = await fetch(API+"User/"+user.Id,{
        method:'PUT',
        headers:{
          "Content-type":"application/json",
          Authorization: "Bearer "+this.auth.token
        },
        body: JSON.stringify(user)
      })
        return res.ok
  };

  async getAll(): Promise<User[]> {
    const res = await this.getAuth('User');
    const resJson = await res.json();
    console.log('RESPUESTA',resJson)
    return resJson;
  };


  // async conversion(user : User): 

}
