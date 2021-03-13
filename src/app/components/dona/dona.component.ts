import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input()
  title: string = 'Sin titulo';

  @Input('labels')
  public doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];

  @Input('data')
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02959'] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
