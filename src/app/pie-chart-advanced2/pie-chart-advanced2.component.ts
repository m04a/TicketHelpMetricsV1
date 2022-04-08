import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { paleta_5 } from '../color';


@Component({
  selector: 'app-pie-chart-advanced2',
  templateUrl: './pie-chart-advanced2.component.html',
  styleUrls: ['./pie-chart-advanced2.component.sass']
})
export class PieChartAdvanced2Component implements OnInit {

  dataChart = [];
  valueChart = [];
  colorScheme = [{"name": " ","value": " "}];

  async ngOnInit() {
    try {
      const response = await axios.get(environment.apiURL + "/api/graph2");
      this.dataChart = response.data;
      for (let i = 0; i < this.dataChart.length; i++) {
        this.valueChart[i] = this.dataChart[i]['value'];
      }
      for (let i = 0; i < this.dataChart.length; i++) {
        this.colorScheme[i] =  {"name": this.dataChart[i]['name'],"value": paleta_5[i]['color']};
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
  yAxisLabel: string = "Número d'usuaris";
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Rols Usuaris';
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
