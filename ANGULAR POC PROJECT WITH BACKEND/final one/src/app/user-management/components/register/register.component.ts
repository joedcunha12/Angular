import { Component, OnInit } from '@angular/core';
import { Register } from '../../model/register';
import { AuthService } from 'src/app/shared-service/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  error: any = {};
  success: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Form load equivalent
  }
  registerSubmit() {
    //console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        if (res._id != '') this.success = 'User Registered Successfully';
        this.router.navigate(['/user/login']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
    );
  }
}
