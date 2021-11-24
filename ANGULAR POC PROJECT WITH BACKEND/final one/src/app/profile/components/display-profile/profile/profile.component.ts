import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { ProfileService } from 'src/app/shared-service/service/profile.service';
import { SubjectService } from 'src/app/shared-service/service/subject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile: any;
  constructor(
    //private activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    console.log('hello from ngoninit');
    debugger;
    // const { id } = this.activatedRoute.snapshot.params;

    // this.profileService.getProfileByUserId(id).subscribe((data) => {
    //   this.profile = data;
    //   console.log(JSON.stringify(this.profile));
    // });
    // console.log(id);

    this.subjectService.subject.subscribe(
      (data) => {
        console.log('inside the subscribe');
        console.log(JSON.stringify(data));
        localStorage.setItem('data', data);
        if (!localStorage.getItem('data')) this.profile = data;
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  }
  ngOnDestroy() {
    //this.subjectService.subject.unsubscribe();
  }
}
