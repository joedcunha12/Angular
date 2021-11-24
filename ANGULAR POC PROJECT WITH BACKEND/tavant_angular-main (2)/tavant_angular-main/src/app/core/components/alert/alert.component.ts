import { Component, OnInit } from '@angular/core';
import { Alert } from '../../models/alert';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  ngOnInit(): void {}

  alerts: Array<Alert> = [];

  constructor(private alertService: AlertService) {
    this.alertService.alerts.subscribe({
      next: (alerts) => {
        this.alerts = [...alerts];
      },
    });
  }
}
