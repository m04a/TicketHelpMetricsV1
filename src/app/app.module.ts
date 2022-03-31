import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartAdvanced1Component } from './pie-chart-advanced1/pie-chart-advanced1.component';
import { PieChartAdvanced4Component } from './pie-chart-advanced4/pie-chart-advanced4.component';
import { VerticalGraphicTypesComponent } from './vertical-graphic-types/vertical-graphic-types.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PieChartAdvanced1Component,
    PieChartAdvanced4Component,
    VerticalGraphicTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
