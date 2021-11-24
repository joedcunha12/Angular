import { Component, OnInit } from '@angular/core';
import { Experince } from '../../models/experince';
import { ProfileService } from 'src/app/shared-service/service/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css'],
})
export class CreateExperienceComponent implements OnInit {
  experience: Experince = new Experince();
  error: any = {};
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  createExperience() {
    this.profileService.saveExperience(this.experience).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
