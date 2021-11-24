import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CreateExperienceComponent } from './components/create-experience/create-experience.component';
import { CreateEducationComponent } from './components/create-education/create-education.component';
import { ProfilesItemsComponent } from './components/profiles-items/profiles-items.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProfileComponent } from './components/display-profile/profile/profile.component';
import { ProfileCredsComponent } from './components/display-profile/profile-creds/profile-creds.component';
import { ProfileAboutComponent } from './components/display-profile/profile-about/profile-about.component';
import { ProfileHeaderComponent } from './components/display-profile/profile-header/profile-header.component';
import { ProfileGithubComponent } from './components/display-profile/profile-github/profile-github.component';
import { SharedServiceModule } from '../shared-service/shared-service.module';
import { ProfileService } from '../shared-service/service/profile.service';
import { HighlightDirective } from './directives/highlight.directive';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    CreateProfileComponent,
    EditProfileComponent,
    CreateExperienceComponent,
    CreateEducationComponent,
    ProfilesItemsComponent,
    ProfilesComponent,
    ProfileComponent,
    ProfileCredsComponent,
    ProfileAboutComponent,
    ProfileHeaderComponent,
    ProfileGithubComponent,
    HighlightDirective,
    SearchPipe,
  ],
  imports: [CommonModule, FormsModule, ProfileRoutingModule],
  providers: [],
})
export class ProfileModule {}
