import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfileService } from 'src/app/shared-service/service/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  profile: Profile = new Profile();
  profileStatus: string;
  error: any = {};
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (res) => {
        this.profile = res;
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.profileStatus = err.error.noProfile;
        this.profile = null;
      }
    );
  }

  editProfileSubmit() {
    this.profileService.saveProfile(this.profile).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
