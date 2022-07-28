import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScatterTestComponent } from './charts/scatter-test/scatter-test.component';

@NgModule({
  declarations: [AppComponent, ScatterTestComponent],
  imports: [BrowserModule, AppRoutingModule, GoogleChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
