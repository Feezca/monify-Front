import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData, RegisterData } from '../interfaces/user';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    this.token.set(localStorage.getItem('token'));
  }
router = inject(Router);
token:WritableSignal<string | null> = signal(null);

async login(loginData:LoginData){
  try{
    const res = await fetch(API+"authentication/authenticate", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(loginData)
    })
    if(!res.ok) return false;
    const tokenRecibido = await res.text()
    console.log("LOGUEANDO",tokenRecibido)
    localStorage.setItem("token",tokenRecibido);
    this.token.set(tokenRecibido);
    return true;
  }
  catch{
    return false
  }
}

async register(registerData: RegisterData){
  const res = await fetch(API+"User", {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(registerData)
  });
  console.log("REGISTRANDO",res)
  return res
}

  logOut(){
    this.token.set(null);
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }

  isAdmin(){
    if (!this.token) {
      return false;
  }
return true
  // Obtén el payload del token JWT
  const payload = this.token;
  // const payloadDesfragmentado= payload.split('.')[1]
  // const decodedPayload = JSON.parse(atob(payload));

  // // Verifica si el usuario es administrador
  // return decodedPayload.role === 'admin';
  }
}

