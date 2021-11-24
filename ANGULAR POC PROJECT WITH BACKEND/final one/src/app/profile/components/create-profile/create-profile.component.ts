import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfileService } from 'src/app/shared-service/service/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  profile: Profile = new Profile();
  error: any = {};
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  createProfileSubmit() {
    this.profileService.createProfile(this.profile).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
