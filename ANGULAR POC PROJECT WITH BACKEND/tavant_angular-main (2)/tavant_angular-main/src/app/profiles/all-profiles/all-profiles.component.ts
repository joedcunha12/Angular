import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile';
import { ProfileCrudService } from '../services/profile-crud.service';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css'],
})
export class AllProfilesComponent implements OnInit {
  profiles: Profile[] = [];
  constructor(private profileService: ProfileCrudService) {}

  ngOnInit(): void {
    this.profileService.getAllProfiles().subscribe({
      next: (res) => {
        console.log(res);
        this.profiles = <Profile[]>res;
      },
    });
  }
}
