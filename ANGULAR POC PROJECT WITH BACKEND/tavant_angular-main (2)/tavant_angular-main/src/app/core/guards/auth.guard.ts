import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      const data: any = jwt_decode(token);

      const expDate: number = data.exp;
      const now = Date.now();
      console.log({ now, expDate, data });
      if (Date.now() / 1000 > expDate) {
        this.router.navigate(['/auth/login']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
