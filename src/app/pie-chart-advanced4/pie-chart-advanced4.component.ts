import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from './../../environments/environment';
import { paleta_2 } from '../color';


@Component({
  selector: 'app-pie-chart-advanced4',
  templateUrl: './pie-chart-advanced4.component.html',
  styleUrls: ['./pie-chart-advanced4.component.sass']
})
export class PieChartAdvanced4Component implements OnInit {

  dataChart = [];
  valueChart = [];
  colorScheme = [{"name": " ","value": " "}];

  async ngOnInit() {
    try {
      const response = await axios.get(environment.apiURL + "/api/graph4");
      this.dataChart = response.data;

      console.log(response.data);
      for (let i = 0; i < this.dataChart.length; i++) {
        this.valueChart[i] = this.dataChart[i]['value'];
      }
      for (let i = 0; i < this.dataChart.length; i++) {
        this.colorScheme[i] =  {"name": this.dataChart[i]['name'],"value": paleta_2[i]['color']};
       }
      console.log (this.valueChart);
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
  yAxisLabel: string = 'Aules';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Dispositus';
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
