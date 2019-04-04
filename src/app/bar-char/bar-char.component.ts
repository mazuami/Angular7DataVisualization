import { Component, OnInit } from '@angular/core';
import { Region } from '../pie-chart/regionClass';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-char',
  templateUrl: './bar-char.component.html',
  styleUrls: ['./bar-char.component.css']
})
export class BarCharComponent implements OnInit {

  stackedChart: any;
  stackedChartOptions: any;
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

    this.stackedChart = Highcharts;

    this.regions = [
      {region_id: 'AS', region_name: 'Asia' },
      {region_id: 'BR', region_name: 'Brazil' },
      {region_id: 'NY', region_name: 'America' },
      {region_id: 'EU', region_name: 'Europe' },
      {region_id: 'PS', region_name: 'Paris' },
     ];

     this.mydata_AS_Categories = ['AS/ITEC/APR', 'AS/ITEC/CCP', 'AS/ITEC/COS'];
     this.mydata_BR_Categories = ['BR/ITEC/APR', 'BR/ITEC/BLR', 'BR/ITEC/REF'];
     this.mydata_EU_Categories = ['EU/ITEC/AUD',  'EU/ITEC/CSP', 'EU/ITEC/REF'];

     this.mydata_AS = [
      {
        name: 'Red Certified',
        data: [
              { y: 4 , color: '#EE2E54'},
              { y: 1 , color: '#EE2E54'},
              { y: 3 , color: '#EE2E54'}
              ]
      },
      {
        name: 'Blue Certified',
        data: [
              { y: 2, color: '#1AA4D4'},
              { y: 1, color: '#1AA4D4'},
              { y: 3, color: '#1AA4D4'}
            ]
      },
      {
        name: 'Green Certified',
        data: [
              { y: 2, color: '#AEEE2E'},
              { y: 0, color: '#AEEE2E'},
              { y: 5, color: '#AEEE2E'}
        ]
      }

    ];

    this.mydata_BR = [
      {
        name: 'Red Certified',
        data: [
          { y: 3 , color: '#EE2E54'},
          { y: 0 , color: '#EE2E54'},
          { y: 2 , color: '#EE2E54'}
          ]
      },
      {
        name: 'Blue Certified',
        data: [
          { y: 2, color: '#1AA4D4'},
          { y: 3, color: '#1AA4D4'},
          { y: 3, color: '#1AA4D4'}
        ]
      },
      {
        name: 'Green Certified',
        data: [
          { y: 3, color: '#AEEE2E'},
          { y: 3, color: '#AEEE2E'},
          { y: 1, color: '#AEEE2E'}
         ]
      }

    ];

    this.mydata_EU = [
      {
        name: 'Red Certified',
        data: [
          { y: 1 , color: '#EE2E54'},
          { y: 2 , color: '#EE2E54'},
          { y: 2 , color: '#EE2E54'}
          ]
      },
      {
        name: 'Blue Certified',
        data: [
          { y: 3 , color: '#1AA4D4'},
          { y: 2 , color: '#1AA4D4'},
          { y: 4 , color: '#1AA4D4'}
          ]
      },
      {
        name: 'Green Certified',
        data: [
          {  y: 3 , color: '#AEEE2E'},
          { y: 1 , color: '#AEEE2E'},
          { y: 2 , color: '#AEEE2E'}
          ]
      }

    ];

     this.mydata = this.mydata_AS;
     this.myCategories = this.mydata_AS_Categories;

     this.drawHistogram();

   }

  ngOnInit() {
  }

  drawHistogram() {

    this.stackedChartOptions = {
      chart: {
         type: 'bar'
      },
      title: {
         text: 'Certification Department wise'
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
            text: 'Accounts ', align: 'high'
         },
         labels: {
            overflow: 'justify'
         }
      },
      tooltip : {
         valueSuffix: '#'
      },
      plotOptions : {
         bar: {
            dataLabels: {
               enabled: true
            }
         }
      },
      credits: {
         enabled: false
      },
      series: this.mydata
   };

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
