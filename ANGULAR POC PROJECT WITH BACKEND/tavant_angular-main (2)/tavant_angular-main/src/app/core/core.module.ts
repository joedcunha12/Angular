import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { httpInterceptorProviders } from './interceptors';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';
import { AuthService } from '../auth/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    AlertComponent,
  ],
  imports: [CommonModule, HttpClientModule, CoreRoutingModule],
  exports: [NavbarComponent, FooterComponent, LandingComponent, AlertComponent],
  providers: [httpInterceptorProviders],
})
export class CoreModule {}
