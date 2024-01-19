import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router=inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    const decodedToken = auth.decodedToken(token);

    if (decodedToken) {
      const role = decodedToken.role;

      if (role === 'Admin') {
        return true;
      } else {
        router.navigate(['/error'])
        return false;
      }
    }
  }

  return false;
};
