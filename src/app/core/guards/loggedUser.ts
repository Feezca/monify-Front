import {  inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const LoggedUser: CanActivateFn =  (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router)

  if(!auth.token()){
    const url=router.createUrlTree(['/login']);
    return url;
  }else{
    return true;
  }
};