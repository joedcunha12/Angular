import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ActionsComponent } from './components/actions/actions.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ExperienceItemComponent } from './components/experience/experience-item/experience-item.component';
import { EducationItemComponent } from './components/education/education-item/education-item.component';
import { DeleteExperienceComponent } from './components/experience/delete-experience/delete-experience.component';
import { DeleteEducationComponent } from './components/education/delete-education/delete-education.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    ActionsComponent,
    ExperienceComponent,
    EducationComponent,
    ExperienceItemComponent,
    EducationItemComponent,
    DeleteExperienceComponent,
    DeleteEducationComponent,
  ],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
