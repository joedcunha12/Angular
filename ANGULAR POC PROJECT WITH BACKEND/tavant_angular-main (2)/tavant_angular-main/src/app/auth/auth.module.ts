import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { httpInterceptorProviders } from '../core/interceptors';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  providers: [httpInterceptorProviders],

  imports: [CommonModule, AuthRoutingModule, FormsModule, HttpClientModule],
})
export class AuthModule {}
