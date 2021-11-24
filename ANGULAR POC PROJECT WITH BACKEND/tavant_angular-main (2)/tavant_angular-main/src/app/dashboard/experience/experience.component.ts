import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input()
  profile: Profile;

  constructor() {}

  ngOnInit(): void {
    console.log(this.profile);
  }
}
