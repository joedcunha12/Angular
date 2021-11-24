import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileCrudService } from './services/profile-crud.service';
import { httpInterceptorProviders } from '../core/interceptors';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [
    ProfileFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    AllProfilesComponent,
    ProfileCardComponent,
  ],
  providers: [ProfileCrudService, httpInterceptorProviders],
  imports: [CommonModule, ProfilesRoutingModule, FormsModule, HttpClientModule],
})
export class ProfilesModule {}
