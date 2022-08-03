import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericFormComponent } from './pages/generic-form/generic-form.component';
import { ScatterTestComponent } from './shared/charts/scatter-test/scatter-test.component';

@NgModule({
  declarations: [AppComponent, ScatterTestComponent, GenericFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
