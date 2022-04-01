import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartAdvanced1Component } from './pie-chart-advanced1/pie-chart-advanced1.component';
import { PieChartAdvanced2Component } from './pie-chart-advanced2/pie-chart-advanced2.component';
import { PieChartAdvanced3Component } from './pie-chart-advanced3/pie-chart-advanced3.component';
import { PieChartAdvanced4Component } from './pie-chart-advanced4/pie-chart-advanced4.component';
import { PieChartAdvanced5Component } from './pie-chart-advanced5/pie-chart-advanced5.component';
import { VerticalGraphicTypesComponent } from './vertical-graphic-types/vertical-graphic-types.component';
import { PieChartAdvanced7Component } from './pie-chart-advanced7/pie-chart-advanced7.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PieChartAdvanced1Component,
    PieChartAdvanced2Component,
    PieChartAdvanced3Component,
    PieChartAdvanced4Component,
    PieChartAdvanced5Component,
    VerticalGraphicTypesComponent,
    PieChartAdvanced7Component,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
