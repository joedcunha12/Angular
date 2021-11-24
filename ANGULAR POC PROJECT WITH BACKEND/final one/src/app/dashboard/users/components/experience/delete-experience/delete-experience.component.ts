import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/shared-service/service/profile.service';

@Component({
  selector: 'app-delete-experience',
  templateUrl: './delete-experience.component.html',
  styleUrls: ['./delete-experience.component.css'],
})
export class DeleteExperienceComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.profileService.deleteExperience(id).subscribe(
      (res) => {
        this.routerService.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log('error in deleting experience: ' + JSON.stringify(err));
      }
    );
  }
}
