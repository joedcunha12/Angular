import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CreateExperienceComponent } from './components/create-experience/create-experience.component';
import { CreateEducationComponent } from './components/create-education/create-education.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProfileComponent } from './components/display-profile/profile/profile.component';

const routes: Routes = [
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'create-experience', component: CreateExperienceComponent },
  { path: 'create-education', component: CreateEducationComponent },
  { path: 'display-all-profiles', component: ProfilesComponent },
  {
    path: 'display-profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
