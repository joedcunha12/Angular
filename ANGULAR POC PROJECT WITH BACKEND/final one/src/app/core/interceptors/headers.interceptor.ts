import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

//Interceptor Runs whenever a http call is made. Similar to Filters in WebAPI
@Injectable() //@means a service.
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.headers.has('content-type')) {
      //this is to bypass the common value
      console.log('not already specified');
      request = request.clone({
        headers: request.headers.set('content-type', 'application/json'),
      });
    } else {
      console.log('already specified');
    }

    if (!request.headers.has('Accept')) {
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json'),
      });
    }

    console.log(request.headers);
    return next.handle(request);
  }
}
