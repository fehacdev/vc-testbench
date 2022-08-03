import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericFormComponent } from './pages/generic-form/generic-form.component';
import { RelchartMatrixComponent } from './pages/relchart-matrix/relchart-matrix.component';

const routes: Routes = [
  { path: 'relchart-matrix', component: RelchartMatrixComponent },
  { path: 'generic-form', component: GenericFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
