import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { ButtonComponent } from './components/common-control/button/button.component';
import { ResourceNotFoundComponent } from './components/resource-not-found/resource-not-found.component';
import { httpInterceptors } from './interceptors';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ButtonComponent,
    ResourceNotFoundComponent,
    ResourceNotFoundComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ButtonComponent,
    ResourceNotFoundComponent,
  ],
  providers: [httpInterceptors],
})
export class CoreModule {}
