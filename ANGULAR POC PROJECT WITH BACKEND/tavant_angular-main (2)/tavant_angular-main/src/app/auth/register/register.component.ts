import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../models/register';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.register.email = `virendra${Math.floor(
      Math.random() * 1000
    )}@gmail.com`;
    this.register.name = 'Virendra';
    this.register.password = '1234567890';
    this.register.password2 = '1234567890';
  }

  ngOnInit(): void {}

  submitForm() {
    this.authService.registerUser(this.register).subscribe({
      next: (res: any) => {
        console.log(res);
        this.tokenService.saveTokenToLocalStorage(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
