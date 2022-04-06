import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from './../../environments/environment';
import { paleta_4 } from '../color';

@Component({
  selector: 'app-pie-chart-advanced3',
  templateUrl: './pie-chart-advanced3.component.html',
  styleUrls: ['./pie-chart-advanced3.component.sass']
})
export class PieChartAdvanced3Component implements OnInit {

  dataChart = [];
  valueChart = [];
  colorScheme = [{"name": " ","value": " "}];

  async ngOnInit() {
    try {
      const response = await axios.get(environment.apiURL + "/api/graph3");
      this.dataChart = response.data;
      for (let i = 0; i < this.dataChart.length; i++) {
        this.valueChart[i] = this.dataChart[i]['value'];
      }
      for (let i = 0; i < this.dataChart.length; i++) {
       this.colorScheme[i] =  {"name": this.dataChart[i]['name'],"value": paleta_4[i]['color']};
      }
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
