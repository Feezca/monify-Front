
import { Injectable, inject } from '@angular/core';
import { Currency } from '../interfaces/currency';
import { API } from '../constants/api';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends ApiService {

  async create( currency : Currency ):Promise<boolean>{
    if(currency.id) return false;
    const res = await fetch( API +'Currency/',{
      method:'POST',
      headers : {
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token
      },
      body: JSON.stringify(currency)
    })
    return res.ok
  };

  async delete(id:number):Promise<boolean>{
    const res = await fetch(API+'Currency/'+id,{
      method:'DELETE',
      headers:{
        Authorization: "Bearer "+this.auth.token
      },
    })
    return res.ok
  };
  
  async edit(currency:Currency):Promise<boolean>{
    if(!currency.id) return false;
    const res = await fetch(API+"Currency/"+currency.id,{
      method:'PUT',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token
      },
      body: JSON.stringify(currency)
    })
    return res.ok
  };
  
  async getAll():Promise<Currency[]>{
    const res = await this.getAuth("Currency")
    const resJson = await res.json();
    return resJson;
  };
  
  async getById(id:number | string):Promise<Currency | undefined>{
    const res = await this.getAuth("Currency/"+id);
    const resJson = await res.json();
    return resJson[0];
  };

}