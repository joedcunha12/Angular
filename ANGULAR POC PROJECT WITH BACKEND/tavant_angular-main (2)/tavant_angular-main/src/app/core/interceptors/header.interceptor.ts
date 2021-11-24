import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/auth/services/token.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('interceptor');
    request = request.clone({
      headers: new HttpHeaders({
        'x-auth-token': this.tokenService.getToken(),
      }),
    });

    console.log(JSON.stringify(request));

    return next.handle(request);
  }
}
