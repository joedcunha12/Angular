import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared-service/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  data: string = localStorage.loginStatus;
  constructor(private service: AuthService) {}

  ngOnInit(): void {
    this.service.loginSubject.subscribe((res) => {
      this.data = res;

      localStorage.setItem('loginStatus', this.data);
      console.log(res);
    });
  }
}
