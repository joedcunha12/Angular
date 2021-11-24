import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [BrowserModule, HttpClient, AppRoutingModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
