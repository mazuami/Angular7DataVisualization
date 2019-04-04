import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Region } from '../pie-chart/regionClass';

@Component({
  selector: 'app-histogram-chart',
  templateUrl: './histogram-chart.component.html',
  styleUrls: ['./histogram-chart.component.css']
})
export class HistogramChartComponent implements OnInit {

  barChart: any;
  barChartOptions: any;
  regions: Region[];
  mydata_AS: any;
  mydata_NY: any;
  mydata_EU: any;
  mydata_PS: any;
  mydata_BR: any;
  mydata: any;
  myCategories: any;
  mydata_AS_Categories: any;
  mydata_NY_Categories: any;
  mydata_EU_Categories: any;
  mydata_PS_Categories: any;
  mydata_BR_Categories: any;
  selectedRegion: string;

  constructor() {
    this.barChart = Highcharts;
    this.regions = [
      {region_id: 'AS', region_name: 'Asia' },
      {region_id: 'BR', region_name: 'Brazil' },
      {region_id: 'NY', region_name: 'America' },
      {region_id: 'EU', region_name: 'Europe' },
      {region_id: 'PS', region_name: 'Paris' },
     ];

     this.mydata_AS = [
       {
          name: 'Certified Amount',
          data: [ 54151.86
                , 17335.03
                , 13449.18
                , 13612.30
                ]
       },
       {
        name: 'un-Certified Amount',
        data: [ 33912.76
              , 7053.67
              , 7419.32
              , 4979.38
             ]
        }
     ];

     this.mydata_BR = [
      {
         name: 'Certified Amount',
         data: [ 12796.35
               , 1964.92
               , 18476.40
               , 968.73
               ]
      },
      {
       name: 'un-Certified Amount',
       data: [ 14385.11
             , 1061.61
             , 11987.64
             , 2164.40
            ]
       }
    ];

    this.mydata_EU = [
      {
         name: 'Certified Amount',
         data: [ 37650.99
               , 20871.66
               , 21448.60
               , 133655.49
               ]
      },
      {
       name: 'un-Certified Amount',
       data: [ 21736.28
             , 12461.83
             , 14753.01
             , 94791.14
            ]
       }
    ];


    this.mydata_NY = [
      {
         name: 'Certified Amount',
         data: [ 103103.67
               , 175307.77
               , 101791.44
               , 12924.38
               ]
      },
      {
       name: 'un-Certified Amount',
       data: [ 84271.60
             , 2485706.79
             , 125867.52
             , 38626.63
            ]
       }
    ];


    this.mydata_PS = [
      {
         name: 'Certified Amount',
         data: [ 191622.08
               , 32883.35
               , 84872.44
               , 249123.29
               ]
      },
      {
       name: 'un-Certified Amount',
       data: [ 174551.75
             , 95760.09
             , 491782.17
             , 38813.50
            ]
       }
    ];

     this.mydata_AS_Categories = ['GAS0001', 'GAS0002', 'GAS0003', 'GAS0004'];
     this.mydata_BR_Categories = ['GBR0001', 'GBR0002', 'GBR0003', 'GBR0004'];
     this.mydata_EU_Categories = ['GEU0001',  'GEU0002', 'GEU0003', 'GEU0004'];
     this.mydata_NY_Categories = ['GNY0001', 'GNY0002', 'GNY0003', 'GNY0004'];
     this.mydata_PS_Categories = ['GPS0001', 'GPS0002', 'GPS0003', 'GPS0004'];

     this.mydata = this.mydata_AS;
     this.myCategories = this.mydata_AS_Categories;

     this.drawHistogram();
   }

  drawHistogram() {
    this.barChartOptions  = {

      chart: {
        type: 'column'
      },
      title: {
         text: 'Certification Entity wise'
      },
      legend : {
         enabled: false,
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: 250,
         y: 100,
         floating: true,
         borderWidth: 1
         },
         xAxis: {
            categories: this.myCategories , title: {
            text: null
         }
      },
      yAxis : {
         min: 0, title: {
            text: 'Certified amount', align: 'high'
         },
         labels: {
            overflow: 'justify'
         }
      },
      tooltip : {
         valueSuffix: ' #'
      },
      plotOptions : {
         bar: {
            dataLabels: {
               enabled: true
            }
         },
         series: {
            stacking: 'percent'
         }
      },
      credits: {
         enabled: false
      },
      series: this.mydata
   };

  }


  ngOnInit() {
  }

  getSelectedRegion(event) {
    console.log(event.target.value);
    this.selectedRegion = event.target.value;

   if (this.selectedRegion === 'Asia') {
     console.log('Inside');
        this.mydata = this.mydata_AS;
        this.myCategories = this.mydata_AS_Categories;

      }

   if (this.selectedRegion === 'Europe') {
        this.mydata = this.mydata_EU;
        this.myCategories = this.mydata_EU_Categories;
       }
   if (this.selectedRegion === 'America') {
        this.mydata = this.mydata_NY;
        this.myCategories = this.mydata_NY_Categories;
       }
   if (this.selectedRegion === 'Brazil') {
        this.mydata = this.mydata_BR;
        this.myCategories = this.mydata_BR_Categories;
       }
   if (this.selectedRegion === 'Paris') {
        this.mydata = this.mydata_PS;
        this.myCategories = this.mydata_PS_Categories;
       }
       this.drawHistogram();
  }

}
