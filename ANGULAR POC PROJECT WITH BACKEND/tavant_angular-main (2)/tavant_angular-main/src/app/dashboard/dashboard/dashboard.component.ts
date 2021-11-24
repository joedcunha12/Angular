import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile';
import { ProfileCrudService } from 'src/app/profiles/services/profile-crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profile?: Profile;
  constructor(private profileService: ProfileCrudService) {}

  ngOnInit(): void {
    this.profileService.getMyProfile().subscribe({
      next: (rep) => {
        console.log(rep);
        this.profile = <Profile>rep;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
