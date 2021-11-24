import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertObservable: BehaviorSubject<Array<Alert>>;
  private alertData: Array<Alert> = [];

  constructor() {
    this.alertObservable = new BehaviorSubject(this.alertData);
  }

  public get alerts() {
    return this.alertObservable;
  }

  setAlert(alert: Alert) {
    console.log(alert);
    console.log(this.alertData);

    this.alertData.push(alert);
    this.alertObservable.next(this.alertData);

    setTimeout(() => {
      this.alertData = this.alertData.filter((a) => a != alert);
      this.alertObservable.next(this.alertData);
      console.log('timeout');
    }, alert.duration || 5000);
  }
}
