import { Component, OnInit } from '@angular/core';
import { Education } from '../../models/education';
import { ProfileService } from 'src/app/shared-service/service/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css'],
})
export class CreateEducationComponent implements OnInit {
  education: Education = new Education();
  error: any = {};
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  createEducation() {
    this.profileService.saveEducation(this.education).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
