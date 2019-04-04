import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { HighchartsChartModule  } from 'highcharts-angular';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import { FormsModule } from '@angular/forms';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { HistogramChartComponent } from './histogram-chart/histogram-chart.component';
import { BarCharComponent } from './bar-char/bar-char.component';
import { GridtableComponent } from './gridtable/gridtable.component';
import { DataServiceService } from './data-service.service';

//import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    CardLayoutComponent,
    HistogramChartComponent,
    BarCharComponent,
    GridtableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    FormsModule ,
    AgGridModule.withComponents([GridtableComponent])
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
