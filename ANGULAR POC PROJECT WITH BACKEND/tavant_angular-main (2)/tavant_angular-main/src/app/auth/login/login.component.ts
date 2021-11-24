import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { Login } from '../models/login';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private alertService: AlertService
  ) {
    this.login.email = 'virendra77@gmail.com';
    this.login.password = '1234567890';
  }

  ngOnInit(): void {}

  loginUser() {
    console.log(this.login);
    this.authService.loginUser(this.login).subscribe({
      next: (res: any) => {
        console.log(res.token);
        this.authService.authSubject.next('login');
        this.router.navigate(['/dashboard']);
        this.tokenService.saveTokenToLocalStorage(res.token);
        this.alertService.setAlert({
          alertType: 'success',
          message: 'Login Success',
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
