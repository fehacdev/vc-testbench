import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScatterTestComponent } from './charts/scatter-test/scatter-test.component';

const routes: Routes = [
  { path: 'scatter-test', component: ScatterTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
