import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthServiceService} from "../services/auth-service.service";

export const authGuard: CanActivateChildFn = (childRoute, state) => {
    let authService = inject(AuthServiceService);
    let router = inject(Router);
    if (!authService.isAuthorised()){
      router.navigate(['/login'])
      return false;
    }
  return true;
};
