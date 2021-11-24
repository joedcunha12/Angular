import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  brandName = 'Dev-Connector';
  status: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authSubject.subscribe({
      next: (data) => {
        console.log(data);
        this.status = data == 'login';
      },
      error: (err) => {
        console.log({ err });
      },
    });
  }

  logout() {
    this.authService.logout();
    this.authService.authSubject.next('logout');
  }
}
