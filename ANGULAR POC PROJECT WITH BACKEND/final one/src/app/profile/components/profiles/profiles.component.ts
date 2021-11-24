import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared-service/service/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  profiles: any[] = [];
  query: string = '';
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getAllProfiles().subscribe(
      (res) => {
        this.profiles = res;
      },
      (err) => {
        console.log('there is no data');
      }
    );
  }
}
