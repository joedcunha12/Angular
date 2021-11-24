import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { ProfileService } from './service/profile.service';
import { SubjectService } from './service/subject.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, ProfileService, SubjectService],
})
export class SharedServiceModule {}
