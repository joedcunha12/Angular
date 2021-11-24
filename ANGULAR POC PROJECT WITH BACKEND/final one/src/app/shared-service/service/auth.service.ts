import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from 'src/app/user-management/model/register';
import { Observable, Subject } from 'rxjs';
import { Login } from 'src/app/user-management/model/login';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginSubject: Subject<string> = new Subject<string>();
  api = '/api/users/';
  loginApi = '/api/users/login';
  constructor(private httpClient: HttpClient) {}

  registerUser(data: Register): Observable<any> {
    return this.httpClient.post(this.api + 'register', data);
  }

  loginUser(data: Login): Observable<any> {
    return this.httpClient.post(this.loginApi, data);
  }
}
