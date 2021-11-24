import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { AuthService } from 'src/app/shared-service/service/auth.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  error: any = {};
  success: any = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.login.password = 'test123#';
  }

  loginSubmit() {
    //console.log(JSON.stringify(this.register));
    this.authService.loginUser(this.login).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.error = {};
        localStorage.setItem('jwtToken', res.token);
        const decodedValue = jwt_decode(res.token);
        localStorage.setItem('userDetails', JSON.stringify(decodedValue));
        this.authService.loginSubject.next('loggedin');
        if (res._id != '') this.success = 'User Registered Successfully';
        this.router.navigate(['/dashboard/user/']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
    );
  }
}
