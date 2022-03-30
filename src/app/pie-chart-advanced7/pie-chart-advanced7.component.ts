import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import axios from 'axios';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-pie-chart-advanced7',
  templateUrl: './pie-chart-advanced7.component.html',
  styleUrls: ['./pie-chart-advanced7.component.sass']
})
export class PieChartAdvanced7Component implements OnInit {

  dataChart = [];

  async ngOnInit() {
    try {
      const response = await axios.get(environment.apiURL + "/api/graph7");
      this.dataChart = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  constructor() {
    Object.assign(this.dataChart);
  }

  view: [number, number] = [700, 400];
  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  //A name posem el nom de les columnes/dades
  colorScheme = [
    {"name": "Resoltes","value": "#c9ff00"},
    {"name": "En proces","value":"#FFD93D"},
    {"name": "Pendents","value": "#ff0000"}
  ];

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
