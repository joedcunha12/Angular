import { Injectable } from '@angular/core';
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
    console.log('inside the guard method');
    if (localStorage.getItem('jwtToken')) {
      console.log('hello from guard');
      const exp = JSON.parse(localStorage.getItem('userDetails')).exp;
      if (exp / 1000 < Date.now()) {
        return true;
      } else {
        this.router.navigate(['/user/login']);
        return false;
      }
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
