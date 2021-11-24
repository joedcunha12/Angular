import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authObservable: BehaviorSubject<any>;

  public get authSubject() {
    return this.authObservable;
  }

  constructor(private http: HttpClient, private tokenService: TokenService) {
    let action = '';
    if (tokenService.getToken()) action = 'login';
    this.authObservable = new BehaviorSubject(action);
  }

  registerUser(data: any) {
    return this.http.post('/api/users', data);
  }

  loginUser(credentials: any) {
    return this.http.post('/api/auth', credentials);
  }
  getUser() {
    return this.http.get('/api/auth');
  }

  logout() {
    this.tokenService.clearToken();
  }
}
