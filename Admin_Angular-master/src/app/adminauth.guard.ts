import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { ChangeUserService } from './services/change-user.service';
import { Injectable } from '@angular/core';

// export const adminauthGuard: CanActivateFn = (route, state) => {
//   return true;
// };
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private _authService:ChangeUserService , private _router: Router){}

  canActivate(): boolean {
    if (this._authService.isAdmin()) {
      console.log(this._authService.isAdmin())
      return true
    } else {
      console.log(this._authService.isAdmin())            
      this._router.navigate(['/login'])
      return false
    }
  }
  
}

