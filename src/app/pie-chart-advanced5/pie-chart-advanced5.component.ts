import { Component, OnInit } from '@angular/core';
import { BrowserModule, disableDebugTools } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import axios from 'axios';
import { environment } from './../../environments/environment';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart-advanced5',
  templateUrl: './pie-chart-advanced5.component.html',
  styleUrls: ['./pie-chart-advanced5.component.sass']
})
export class PieChartAdvanced5Component implements OnInit {
  dataChart = [];
  colorScheme: Color= {
    name: '',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: []
  };
  legend: boolean = true;
  //legend position need to be imported and changed it's format
  legendPosition: LegendPosition = LegendPosition.Below;
  max: number = 10;
  units: string = "incidencies";

  async ngOnInit() {
    try {
      const response = await axios.get(environment.apiURL + "/api/graph5");
      this.dataChart = response.data;
      console.log(response.data);
      this.colorScheme = {
        domain: this.getArray(),
        group: ScaleType.Ordinal, selectable: true, name: 'Suggestions',
      };
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
  letters = '0123456789ABCDEF';
  colour = '#';
  getRandomColor() {
    this.colour = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
      this.colour += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.colour;
  }
  getArray() {
    let colors: Array<string> = [];
    for (var i = 0; i < this.dataChart.length; i++) {
      colors[i] = this.getRandomColor();
    }
    return colors;
  }
  //colorScheme was updated and now it need group, selectable and name
  //also it need to be imported


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  hideShowText = () => {
    return ``
  };

}
