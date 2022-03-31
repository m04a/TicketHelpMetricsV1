import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-pie-chart-advanced3',
  templateUrl: './pie-chart-advanced3.component.html',
  styleUrls: ['./pie-chart-advanced3.component.sass']
})
export class PieChartAdvanced3Component implements OnInit {

  dataChart = [];

  async ngOnInit() {
    try {
      const response = await axios.get(environment.apiURL + "/api/graph3");
      this.dataChart = response.data;

      console.log(response.data);
    } catch (error) {
      //console.log(error);
    }
  }

  constructor() {
    Object.assign(this.dataChart);
  }

  view: [number, number] = [700, 400];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Departaments';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Incidències';
  legendTitle: string ="Llegenda";

  //A name posem el nom de les columnes/dades
  colorScheme = [
    {"name": "Aula1","value": "#ff0000"},
    {"name": "Aula2","value": "#000000"},
    {"name": "Aula3","value": "#c9ff00"},
    {"name": "Aula4","value": "#ffff00"}
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
