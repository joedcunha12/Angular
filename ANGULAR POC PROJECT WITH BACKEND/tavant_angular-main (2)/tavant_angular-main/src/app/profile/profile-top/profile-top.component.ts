import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.css'],
})
export class ProfileTopComponent implements OnInit {
  @Input() profile: Profile;
  constructor() {}

  ngOnInit(): void {}
}
