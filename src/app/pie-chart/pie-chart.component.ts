import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { Region } from './regionClass';
import { DataServiceService } from '../data-service.service';
import { StringifyOptions } from 'querystring';
import { generate } from 'rxjs';
import { Entity } from '../entity';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})



export class PieChartComponent implements OnInit {
  pieChart: any;
  pieChartOptions: any;
  mydata_AS: any;
  mydata_BR: any;
  mydata_EU: any;
  mydata_NY: any;
  mydata_PS: any;
  regions: Region[];
  mydata: any;
  selectedRegion: string ;
  message: string;

  constructor(private data_service: DataServiceService) {
    this.regions = [
      {region_id: 'AS', region_name: 'Asia' },
      {region_id: 'BR', region_name: 'Brazil' },
      {region_id: 'NY', region_name: 'America' },
      {region_id: 'EU', region_name: 'Europe' },
      {region_id: 'PS', region_name: 'Paris' },
  ];

    this.selectedRegion = 'Asia';
    this.mydata_BR = [
      { name: 'Red', y: 5, selected: true, color: '#EE2E54'},
      { name: 'Blue', y: 7, sliced: true, selected: true, color: '#1AA4D4'},
      { name: 'Green', y: 8, selected: true, color: '#AEEE2E'  },
      ];
    this.mydata_EU = [
        { name: 'Red', y: 5, selected: true, color: '#EE2E54'},
        { name: 'Blue', y: 6, sliced: true, selected: true, color: '#1AA4D4'},
        { name: 'Green', y: 9, selected: true, color: '#AEEE2E'  },
        ];
    this.mydata_NY = [
          { name: 'Red', y: 5, selected: true, color: '#EE2E54'},
          { name: 'Blue', y: 9, sliced: true, selected: true, color: '#1AA4D4'},
          { name: 'Green', y: 6, selected: true, color: '#AEEE2E'  },
          ];
    this.mydata_PS = [
            { name: 'Red', y: 6, selected: true, color: '#EE2E54'},
            { name: 'Blue', y: 9, sliced: true, selected: true, color: '#1AA4D4'},
            { name: 'Green', y: 5, selected: true, color: '#AEEE2E'  },
         ];
    this.mydata_AS = [
            {name: 'Red', y: 6, selected: true, color: '#EE2E54'},
            {name: 'Blue', y: 8, sliced: true, selected: true, color: '#1AA4D4' },
            {name: 'Green', y: 7, selected: true, color: '#AEEE2E'},
          ];
     this.mydata = this.mydata_AS;
     this.drawPieChart();
  }


  drawPieChart() {
    this.pieChart = Highcharts;
    this.pieChartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false
      },
      title : {
        text : ' Certification '
      },
      credits: {
        enabled: false
      },
      tooltip : {
        pointFormat: '{series.name}: <b>{point.percentage: .1f}%</b>'
      },
      plotOptions : {
        pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                format: '<b>{point.percentage: .1f}% </b>',
                dataLabels: {
                enabled: true
                },
                showInLegend: true,
                point: {
                   events: {
                             click: function(event) {
                               let data_service_ = new DataServiceService();
                               let entity_obj = new Entity();
                               entity_obj.region = this.selectedRegion;
                               entity_obj.certification_light = event.point.color.toString();
                               data_service_.changeMessage(entity_obj);
                                }
                            }
                        }
                      }
            },
      series : [{
        type: 'pie',
        name: 'Certificaton Share',
         data: this.mydata
      }]
    };

  }


  ngOnInit() {
   console.log(this.data_service);
  }

  getSelectedRegion(event) {
   console.log(event.target.value);
   this.selectedRegion = event.target.value;

   if (this.selectedRegion === 'Asia') {
        this.mydata = this.mydata_AS;
       }

   if (this.selectedRegion === 'Europe') {
        this.mydata = this.mydata_EU;
       }
   if (this.selectedRegion === 'America') {
        this.mydata = this.mydata_NY;
       }
   if (this.selectedRegion === 'Brazil') {
        this.mydata = this.mydata_BR;
       }
   if (this.selectedRegion === 'Paris') {
        this.mydata = this.mydata_PS;
       }
    this.drawPieChart();

  }

}
// tslint:disable-next-line:class-name
