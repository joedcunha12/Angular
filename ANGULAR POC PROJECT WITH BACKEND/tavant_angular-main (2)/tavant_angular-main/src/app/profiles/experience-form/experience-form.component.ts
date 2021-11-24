import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { Experience } from '../models/profile-form-data';
import { ProfileCrudService } from '../services/profile-crud.service';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css'],
})
export class ExperienceFormComponent implements OnInit {
  experience: Experience = new Experience();
  constructor(
    private profileService: ProfileCrudService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.experience.company = 'feelfreetocode';
    this.experience.current = false;
    this.experience.description = 'somem description';
    this.experience.from = new Date();
    this.experience.to = new Date();
    this.experience.location = 'Jabalpur';
    this.experience.title = 'SE';
  }

  addExperience() {
    console.log(this.experience);
    this.profileService.addExperience(this.experience).subscribe({
      next: (res) => {
        this.alertService.setAlert({
          alertType: 'success',
          message: 'Experience Added',
        });

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
