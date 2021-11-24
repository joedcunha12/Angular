import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardActionsComponent } from './dashboard-actions/dashboard-actions.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { httpInterceptorProviders } from '../core/interceptors';
import { ProfileCrudService } from '../profiles/services/profile-crud.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardActionsComponent,
    EducationComponent,
    ExperienceComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, HttpClientModule],
  providers: [httpInterceptorProviders, ProfileCrudService],
})
export class DashboardModule {}
