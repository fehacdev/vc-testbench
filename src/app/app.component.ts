import { Component } from '@angular/core';
import { ScatterData } from './models/charts/scatter-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Q1     Q2      Q3      Q4
  // 0.11   0.81    0.91    0.25
  // 0.89   0.66    0.05    0.32

  // Q1 -> Q1
  scatterData11: ScatterData = {
    soc: { atual: 0.11, projetado: 0.23, baseline: 0.72 },
    sor: { atual: 0.89, projetado: 0.66, baseline: 0.36 },
  };
  // Q1 -> Q2
  scatterData12: ScatterData = {
    soc: { atual: 0.11, projetado: 0.81, baseline: 0.72 },
    sor: { atual: 0.89, projetado: 0.66, baseline: 0.36 },
  };
  // Q1 -> Q3
  scatterData13: ScatterData = {
    soc: { atual: 0.11, projetado: 0.91, baseline: 0.72 },
    sor: { atual: 0.89, projetado: 0.05, baseline: 0.36 },
  };
  // Q1 -> Q4
  scatterData14: ScatterData = {
    soc: { atual: 0.11, projetado: 0.25, baseline: 0.72 },
    sor: { atual: 0.89, projetado: 0.32, baseline: 0.36 },
  };
  // Q2 -> Q1
  scatterData21: ScatterData = {
    soc: { atual: 0.81, projetado: 0.11, baseline: 0.72 },
    sor: { atual: 0.66, projetado: 0.89, baseline: 0.36 },
  };
  // Q2 -> Q2
  scatterData22: ScatterData = {
    soc: { atual: 0.81, projetado: 0.94, baseline: 0.72 },
    sor: { atual: 0.66, projetado: 0.94, baseline: 0.36 },
  };
  // Q2 -> Q3
  scatterData23: ScatterData = {
    soc: { atual: 0.81, projetado: 0.91, baseline: 0.72 },
    sor: { atual: 0.66, projetado: 0.05, baseline: 0.36 },
  };
  // Q2 -> Q4
  scatterData24: ScatterData = {
    soc: { atual: 0.81, projetado: 0.25, baseline: 0.72 },
    sor: { atual: 0.66, projetado: 0.32, baseline: 0.36 },
  };
  // Q3 -> Q1
  scatterData31: ScatterData = {
    soc: { atual: 0.91, projetado: 0.11, baseline: 0.72 },
    sor: { atual: 0.05, projetado: 0.89, baseline: 0.36 },
  };
  // Q3 -> Q2
  scatterData32: ScatterData = {
    soc: { atual: 0.91, projetado: 0.81, baseline: 0.72 },
    sor: { atual: 0.05, projetado: 0.66, baseline: 0.36 },
  };
  // Q3 -> Q3
  scatterData33: ScatterData = {
    soc: { atual: 0.91, projetado: 0.78, baseline: 0.72 },
    sor: { atual: 0.05, projetado: 0.24, baseline: 0.36 },
  };
  // Q3 -> Q4
  scatterData34: ScatterData = {
    soc: { atual: 0.91, projetado: 0.25, baseline: 0.72 },
    sor: { atual: 0.05, projetado: 0.32, baseline: 0.36 },
  };
  // Q4 -> Q1
  scatterData41: ScatterData = {
    soc: { atual: 0.25, projetado: 0.11, baseline: 0.72 },
    sor: { atual: 0.32, projetado: 0.89, baseline: 0.36 },
  };
  // Q4 -> Q2
  scatterData42: ScatterData = {
    soc: { atual: 0.25, projetado: 0.81, baseline: 0.72 },
    sor: { atual: 0.32, projetado: 0.66, baseline: 0.36 },
  };
  // Q4 -> Q3
  scatterData43: ScatterData = {
    soc: { atual: 0.25, projetado: 0.91, baseline: 0.72 },
    sor: { atual: 0.32, projetado: 0.05, baseline: 0.36 },
  };
  // Q4 -> Q4
  scatterData44: ScatterData = {
    soc: { atual: 0.25, projetado: 0.66, baseline: 0.72 },
    sor: { atual: 0.32, projetado: 0.12, baseline: 0.36 },
  };
}
