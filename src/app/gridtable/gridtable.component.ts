import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { Certification } from './vehicle';
import { DataServiceService } from '../data-service.service';
import { Entity } from '../entity';


@Component({
  selector: 'app-gridtable',
  templateUrl: './gridtable.component.html',
  styleUrls: ['./gridtable.component.css']
})
export class GridtableComponent implements OnInit {

  @ViewChild('agGrid') agGrid;
 
  private gridOptions: GridOptions;
  private gridApis;
  private gridColumnApi;

  private gridOptionsVehicleOwner: GridOptions;
  private gridOwnerApis;
  private gridOwnerColumnApi;
  private gridApisVehicleOwner;

   message: Entity;

  constructor(private data: DataServiceService) {
    this.gridOptions = <GridOptions>{};
    this.gridOptionsVehicleOwner = <GridOptions>{};
    this.gridOptions.columnDefs = [
                                      {
                                            'headerName': 'Account',
                                            'field': 'account',
                                            'width': 100,
                                      },
                                      {
                                            'headerName': 'Region',
                                            'field': 'region',
                                            'width': 100,
                                      },
                                      {
                                            'headerName': 'Certification Light',
                                            'field': 'certification_light',
                                            'width': 100,
                                      },
                                      {
                                            'headerName': 'Department',
                                            'field': 'department',
                                            'width': 100,
                                      },
                                      {
                                            'headerName': 'Entities',
                                            'field': 'entities',
                                            'width': 100,
                                      },
                                      {
                                            'headerName': 'Original Amt',
                                            'field': 'original_amt',
                                            'width': 100,
                                      },
                                      {
                                            'headerName': 'Certified Amt',
                                            'field': 'certified_amt',
                                            'width': 100,
                                      },

                                  ];

    this.gridOptions.rowData = this.certification_data;
    this.gridOptions.enableColResize = true;
    this.gridOptions.getRowStyle = function(parms) {
      if (parms.node.rowIndex % 2 === 0) {
        return { background: '#BDE1F0' };

      }
    };

   }

   certification_data: Certification[] = [
    {
      'account': 100000010,
      'region': 'AS',
      'certification_light': 'B',
      'department': 'AS/ITEC/APR',
      'entities': 'GAS0001',
      'original_amt': 9658.23 ,
      'certified_amt': 2994.05
    },
    {
      'account': 100000015,
      'region': 'AS',
      'certification_light': 'B',
      'department': 'AS/ITEC/COS',
      'entities': 'GAS0001',
      'original_amt': 65415.23 ,
      'certified_amt': 40557.44
    },
    {
      'account': 100000020 ,
      'region': 'AS',
      'certification_light': 'B',
      'department': 'AS/ITEC/CCP',
      'entities': 'GAS0001',
      'original_amt': 3254.25 ,
      'certified_amt': 2570.86
    },
    {
      'account': 100000080 ,
      'region': 'AS',
      'certification_light': 'B',
      'department': 'AS/ITEC/COS',
      'entities': 'GAS0004',
      'original_amt': 8543.21 ,
      'certified_amt': 6321.98

    },
    {
      'account': 100000085 ,
      'region': 'AS',
      'certification_light': 'B',
      'department': 'AS/ITEC/APR',
      'entities': 'GAS0004',
      'original_amt': 85.36 ,
      'certified_amt': 77.68
    },
    {
      'account': 100000090 ,
      'region': 'AS',
      'certification_light': 'B',
      'department': 'AS/ITEC/COS ',
      'entities': 'GAS0004',
      'original_amt': 841.63 ,
      'certified_amt': 42.08

    },
    {
      'account': 100000005,
      'region': 'AS',
      'certification_light': 'G',
      'department': 'AS/ITEC/COS',
      'entities': 'GAS0001',
      'original_amt': 7542.9369,
      'certified_amt': 932.2731
    },
    {
      'account': 100000025,
      'region': 'AS',
      'certification_light': 'G',
      'department': 'AS/ITEC/COS',
      'entities': 'GAS0002',
      'original_amt': 1580.107 ,
      'certified_amt': 968.4528
    },
    {
      'account': 100000030 ,
      'region': 'AS',
      'certification_light': 'G',
      'department': 'AS/ITEC/APR',
      'entities': 'GAS0002',
      'original_amt': 726.125 ,
      'certified_amt': 726.125

    },
    {
      'account': 100000035,
      'region': 'AS',
      'certification_light': 'G',
      'department': 'AS/ITEC/COS',
      'entities': 'GAS0002',
      'original_amt': 1669.5251 ,
      'certified_amt': 2842.7049


    },
    {
      'account': 100000100,
      'region': 'AS',
      'certification_light': 'R',
      'department': 'AS/ITEC/COS ',
      'entities': 'GAS0001',
      'original_amt': 85.581  ,
      'certified_amt': 389.869
    },
    {
      'account': 100000095 ,
      'region': 'AS',
      'certification_light': 'R',
      'department': 'AS/ITEC/APR',
      'entities': 'GAS0004 ',
      'original_amt': 7125.0516 ,
      'certified_amt': 1671.3084
    },
    {
      'account': 100000075,
      'region': 'AS',
      'certification_light': 'R',
      'department': 'AS/ITEC/COS',
      'entities': 'GAS0004',
      'original_amt': 45.5168  ,
      'certified_amt': 279.6032

    },
    {
      'account': 100000070      ,
      'region': 'AS',
      'certification_light': 'R',
      'department': 'AS/ITEC/APR ',
      'entities': 'GAS0003',
      'original_amt': 7726.6,
      'certified_amt': 1931.65

    },
    {
      'account': 100000050 ,
      'region': 'AS',
      'certification_light': 'R',
      'department': 'AS/ITEC/APR ',
      'entities': 'GAS0003',
      'original_amt': 90.17,
      'certified_amt': 2164.08


    },
    {
      'account': 100000045,
      'region': 'AS',
      'certification_light': 'R',
      'department': 'AS/ITEC/APR',
      'entities': 'GAS0002',
      'original_amt': 7249.8318 ,
      'certified_amt': 1083.3082
    },
    {
      'account': 100000040 ,
      'region': 'AS',
      'certification_light': 'R',
      'department': 'AS/ITEC/COS',
      'entities': 'GAS0002',
      'original_amt': 6109.4412 ,
      'certified_amt': 1433.0788
    },
    {
      'account': 100000000 ,
      'region': 'AS',
      'certification_light': 'R',
      'department': 'AS/ITEC/CCP',
      'entities': 'GAS0001',
      'original_amt': 400.9875 ,
      'certified_amt': 385.2625

    }


   ];

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message );
    console.log('From Grid ' + this.message.region + ' : ' + this.message.certification_light );
  }

  onVehicleGridReady(params) {
    this.gridApis = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApis.sizeColumnsToFit();
    this.gridColumnApi.sizeColumnsToFit();

      params.api.sizeColumnsToFit();
//   params.api.sizeColumnsToFit();

 window.addEventListener('resize', function() {

                                               setTimeout(function() {
                                                     console.log('Size to fit');
                                                      params.api.sizeColumnsToFit();
                                               });
 });

  }


}

