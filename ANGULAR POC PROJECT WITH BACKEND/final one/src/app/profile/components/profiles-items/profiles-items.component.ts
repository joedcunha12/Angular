import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/shared-service/service/subject.service';

@Component({
  selector: 'app-profiles-items',
  templateUrl: './profiles-items.component.html',
  styleUrls: ['./profiles-items.component.css'],
})
export class ProfilesItemsComponent implements OnInit {
  @Input() profile: any = {};
  constructor(private router: Router, private subjectService: SubjectService) {}

  ngOnInit(): void {}
  viewProfile(id: any) {
    console.log('button clicked');
    // subject exposure
    // then it should redirect to display-profile.
    console.log(id);
    this.subjectService.consumeSubject(id);
    this.router.navigate(['/profile/display-profile/']);
  }
}
