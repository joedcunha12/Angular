import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { ProfileFormData } from '../models/profile-form-data';
import { ProfileCrudService } from '../services/profile-crud.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent implements OnInit {
  profileFormData: ProfileFormData = new ProfileFormData();
  constructor(
    private profileService: ProfileCrudService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.profileFormData.bio = 'bio data';
    this.profileFormData.company = 'feelfreetocode';
    this.profileFormData.date = new Date().toISOString();
    this.profileFormData.status = 'Junior Developer';
    this.profileFormData.website = 'https://feelfreetocode.in';
    this.profileFormData.githubusername = 'virendra62';
    this.profileFormData.location = 'Jabalpur';
    this.profileFormData.skills = 'angular, nodejs, java , spring';
  }

  createProfile() {
    console.log(this.profileFormData);
    this.profileService.createProfile(this.profileFormData).subscribe({
      next: (res) => {
        console.log({ res });
        this.alertService.setAlert({
          alertType: 'success',
          message: 'profile created !',
        });
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.alertService.setAlert({
          alertType: 'danger',
          message: 'Cant create profile !!',
        });
      },
    });
  }
}
