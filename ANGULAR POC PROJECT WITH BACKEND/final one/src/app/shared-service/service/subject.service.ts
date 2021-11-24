import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  subject: Subject<any> = new Subject<any>();

  constructor() {}
  consumeSubject(profile: any) {
    this.subject.next(profile);
  }
}
