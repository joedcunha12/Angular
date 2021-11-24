import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared-service/service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private service: AuthService, private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
    this.service.loginSubject.next('');
    this.router.navigate(['/user/login']);
  }
}
