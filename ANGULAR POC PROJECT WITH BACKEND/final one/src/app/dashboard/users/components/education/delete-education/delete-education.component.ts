import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/shared-service/service/profile.service';

@Component({
  selector: 'app-delete-education',
  templateUrl: './delete-education.component.html',
  styleUrls: ['./delete-education.component.css'],
})
export class DeleteEducationComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.profileService.deleteEducation(id).subscribe(
      (res) => {
        this.routerService.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log('error in deleting eductaion: ' + JSON.stringify(err));
      }
    );
  }
}
