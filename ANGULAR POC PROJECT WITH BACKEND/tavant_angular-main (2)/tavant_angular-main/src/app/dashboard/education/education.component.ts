import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input()
  profile?: Profile;

  constructor() {}

  ngOnInit(): void {}
}
