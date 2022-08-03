import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';

import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScatterTestComponent } from './charts/scatter-test/scatter-test.component';
import { GenericFormComponent } from './pages/generic-form/generic-form.component';
import { RelchartMatrixComponent } from './pages/relchart-matrix/relchart-matrix.component';

@NgModule({
  declarations: [AppComponent, ScatterTestComponent, GenericFormComponent, RelchartMatrixComponent],
  imports: [BrowserModule, AppRoutingModule, GoogleChartsModule, TextMaskModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
