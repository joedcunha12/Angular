// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';

// @Injectable()
// export class JwtTokenInterceptor implements HttpInterceptor {
//   constructor(private router: Router) {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     // if (
//     //   request.url.indexOf('login') < 0 ||
//     //   request.url.indexOf('register') < 0
//     // ) {
//     //   const token = localStorage.getItem('jwtToken');
//     //   console.log('inside jwt int:' + token);

//     //   if (!token) {
//     //     console.log('No token');
//     //     this.router.navigate(['user/login']);
//     //   }

//     //   request = request.clone({
//     //     headers: request.headers.set('authorization', token),
//     //   });
//     // }

//     return next.handle(request);
//   }
// }

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = request.url;

    // if (url.indexOf('login') >= 0 || url.indexOf('register') >= 0) {
    //   console.log('inside the if condition from jwt-token interceptor');
    //   return next.handle(request);
    // }
    const token = localStorage.getItem('jwtToken');

    // 1 .token is expired one.
    // 2. token is no available

    if (!token) {
      if (url.indexOf('login') >= 0 || url.indexOf('register') >= 0) {
        console.log('inside the if condition from jwt-token interceptor');
        return next.handle(request);
      }
      this.router.navigate(['/user/login']);
      return null;
    }

    console.log(token + 'from jwt-joken interceptor');
    request = request.clone({
      headers: request.headers.set('authorization', token),
    });
    return next.handle(request);
  }
}
