import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from './../../environments/environment';
import { paleta_1 } from '../color';

@Component({
  selector: 'app-vertical-graphic-types',
  templateUrl: './vertical-graphic-types.component.html',
  styleUrls: ['./vertical-graphic-types.component.sass']
})
export class VerticalGraphicTypesComponent implements OnInit {
  
  dataChart = [];
  valueChart = [];
  colorScheme = [{"name": " ","value": " "}];
  async ngOnInit() {
    try {
      const response = await axios.get(environment.apiURL + "/api/graph6");
      this.dataChart = response.data;
      console.log(response.data);
      for (let i = 0; i < this.dataChart.length; i++) {
        this.valueChart[i] = this.dataChart[i]['value'];
      }
      for (let i = 0; i < this.dataChart.length; i++) {
       this.colorScheme[i] =  {"name": this.dataChart[i]['name'],"value": paleta_1[i]['color']};
      }
      console.log (this.valueChart);
    } catch (error) {
      //console.log(error);
    }
  }

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dispositius';



  constructor() {
    Object.assign(this.dataChart);
  }

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
