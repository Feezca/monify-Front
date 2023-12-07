import {  inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const LoggedAdmin: CanActivateFn =  (route, state) => {
    const auth = inject(AuthService);
    if(!auth.token()){
        const router = inject(Router);
        router.navigate(['login']);
        return false;
    }
    if(!auth.isAdmin()){
        return false;
    }
    return true;
};