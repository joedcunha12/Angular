import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.css'],
})
export class ProfileEducationComponent implements OnInit {
  @Input() profile: Profile;
  constructor() {}

  ngOnInit(): void {}
}
