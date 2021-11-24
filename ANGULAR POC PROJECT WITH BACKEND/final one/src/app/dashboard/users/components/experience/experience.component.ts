import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/shared-service/service/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  // experiences: any = {};
  @Input() experienceList: any = [];
  constructor() {}

  ngOnInit(): void {}
}
