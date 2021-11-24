import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DeleteExperienceComponent } from './components/experience/delete-experience/delete-experience.component';
import { DeleteEducationComponent } from './components/education/delete-education/delete-education.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
  },
  {
    path: 'delete-experience/:id',
    component: DeleteExperienceComponent,
  },
  {
    path: 'delete-education/:id',
    component: DeleteEducationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
