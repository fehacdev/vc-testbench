import { Component, Input, OnInit } from '@angular/core';
import { ScatterData } from 'src/app/models/charts/scatter-data';

@Component({
  selector: 'app-scatter-test',
  templateUrl: './scatter-test.component.html',
  styleUrls: ['./scatter-test.component.css'],
})
export class ScatterTestComponent implements OnInit {
  @Input() scatterData: ScatterData;

  type = 'ScatterChart';

  columns = [
    { type: 'number', role: 'domain' },
    'Atual',
    { type: 'string', role: 'annotation' },
    'Projetado',
    { type: 'string', role: 'annotation' },
  ];

  data = [];

  options = {
    series: {
      0: { color: '#43459d' },
      1: { color: '#e2431e' },
    },
    pointSize: 12,
    backgroundColor: 'transparent',
    enableInteractivity: false,
    hAxis: {
      title: 'SoC',
      minValue: 0,
      maxValue: 1,
      format: 'percent',
      ticks: [0, 1],
    },
    vAxis: {
      title: 'SoR',
      minValue: 0,
      maxValue: 1,
      format: 'percent',
      ticks: [0, 1],
    },
    legend: 'none',
  };

  ngOnInit() {
    this.data = [
      [
        this.scatterData.soc.atual,
        this.scatterData.sor.atual,
        this.getQuadrant(
          this.scatterData.soc.atual,
          this.scatterData.soc.baseline,
          this.scatterData.sor.atual,
          this.scatterData.sor.baseline
        ),
        null,
        null,
      ],
      [
        this.scatterData.soc.projetado,
        null,
        null,
        this.scatterData.sor.projetado,
        this.getQuadrant(
          this.scatterData.soc.projetado,
          this.scatterData.soc.baseline,
          this.scatterData.sor.projetado,
          this.scatterData.sor.baseline
        ),
      ],
    ];

    this.options.hAxis.ticks = [this.scatterData.soc.baseline, 1];
    this.options.vAxis.ticks = [this.scatterData.sor.baseline, 1];

    for (let i = 0; i < 4; i++) {
      const soc = Math.random();
      const sor = Math.random();
      const socBaseline = 0.72;
      const sorBaseline = 0.36;
      console.log(
        `${this.getQuadrant(soc, socBaseline, sor, sorBaseline)}: ${soc} ${sor}`
      );
    }
  }

  getQuadrant(
    soc: number,
    socBaseline: number,
    sor: number,
    sorBaseline: number
  ) {
    if (soc < socBaseline && sor >= sorBaseline) {
      return 'Q1';
    }
    if (soc >= socBaseline && sor >= sorBaseline) {
      return 'Q2';
    }
    if (soc >= socBaseline && sor < sorBaseline) {
      return 'Q3';
    }
    return 'Q4';
  }
}
