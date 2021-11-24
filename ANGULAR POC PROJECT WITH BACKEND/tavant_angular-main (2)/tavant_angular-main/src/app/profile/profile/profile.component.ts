import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileCrudService } from 'src/app/profiles/services/profile-crud.service';
import { Profile } from '../models/profile';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  token: any;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileCrudService
  ) {}

  ngOnInit(): void {
    // decode the token , confirm token is avail or not
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.data = jwt_decode(this.token);
      console.log(this.data);
    }

    this.route.params.subscribe({
      next: (params: Params) => {
        console.log(params.id);
        this.getProfile(params.id);
      },
    });
  }

  getProfile(id: string) {
    this.profileService.getProfileById(id).subscribe({
      next: (profile) => {
        console.log(profile);
        this.profile = <Profile>profile;
      },
    });
  }
}
