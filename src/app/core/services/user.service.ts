import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User, deleteUser, updateUserPlan } from '../interfaces/user';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

    async updatePlan( user : updateUserPlan ) : Promise<boolean> {
      if( !user.id ) 
        return false;
        const res = await fetch(API+"User/UpdatePlan/"+user.id,{
          method:'PUT',
          headers:{
            "Content-type":"application/json",
            Authorization: "Bearer "+this.auth.token()
          },
          body: JSON.stringify(user)
        })
          return res.ok
    };

    async updateState( user : deleteUser ) : Promise<boolean> {
      if( !user.id ) 
        return false;
        const res = await fetch(API+"User/DeleteUser/"+user.id,{
          method:'PUT',
          headers:{
            "Content-type":"application/json",
            Authorization: "Bearer "+this.auth.token()
          },
          body: JSON.stringify(user)
        })
          return res.ok
    };


    async getAll(): Promise<User[]> {
      const res = await this.getAuth('User');
      const resJson = await res.json();
      return resJson;
    };

    async getById(id:number | string):Promise<User | undefined>{
      const res = await fetch(API + 'User/' + id, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + this.auth.token(),
        },
      });
      return await res.json();
    };

    async incrementarContadorConversiones(userId: number): Promise<boolean> {
      try {
        const res = await fetch(API + "User/ConversorCounter/" + userId, {
          method: 'PUT',
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + this.auth.token()
          },
          body: JSON.stringify(userId)
        })
        return res.ok;
      } catch (error) {
        console.error('Error al incrementar el contador de conversiones:', error);
        return false;
      }
    }
  
}
