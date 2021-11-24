import { Component, OnInit, Input } from '@angular/core';
import { Experince } from 'src/app/profile/models/experince';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/shared-service/service/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input() educationList: any = [];
  constructor() {}

  ngOnInit(): void {}
}
