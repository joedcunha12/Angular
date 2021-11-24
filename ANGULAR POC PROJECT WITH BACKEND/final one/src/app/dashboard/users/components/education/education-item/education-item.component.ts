import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/shared-service/service/profile.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css'],
})
export class EducationItemComponent implements OnInit {
  @Input() education: any = {};
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}
}
