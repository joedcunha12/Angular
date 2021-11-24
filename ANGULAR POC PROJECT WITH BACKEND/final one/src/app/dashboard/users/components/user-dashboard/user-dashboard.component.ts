import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared-service/service/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared-service/service/profile.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  userName: string = '';
  profile: any = {};
  profileStatus: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('userDetails')).name;
    this.profileService.getProfile().subscribe(
      (res) => {
        this.profile = res;
        //localStorage.setItem('profile', JSON.stringify(this.profile));
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.profileStatus = err.error.noProfile;
        this.profile = null;
      }
    );
  }
}
