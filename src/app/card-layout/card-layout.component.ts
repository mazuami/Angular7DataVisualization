import { Component, OnInit } from '@angular/core';
import { Currency } from './currency';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent implements OnInit {

  currencies: Currency[];
  selectedCurrency: string;
  asia: number;
  brazil: number;
  paris: number;
  america: number;
  europe: number;


  asia_total: number;
  brazil_total: number;
  paris_total: number;
  america_total: number;
  europe_total: number;

  asia_amt: number;
  brazil_amt: number;
  paris_amt: number;
  america_amt: number;
  europe_amt: number;

  asia_amt_total: number;
  brazil_amt_total: number;
  paris_amt_total: number;
  america_amt_total: number;
  europe_amt_total: number;


  constructor() {
    this.asia = 63958.16 ;
    this.america = 1483786.18 ;
    this.brazil = 34478.04;
    this.paris = 591313.00;
    this.europe = 216022.51;

    this.asia_total = 151913.50;
    this.brazil_total = 63805.16;
    this.paris_total = 730990.66;
    this.america_total = 3127599.80;
    this.europe_total = 1359408.67;



    this.currencies = [
    { curr_id : 'EUR' , curr_name : 'EURO' },
    { curr_id : 'USD' , curr_name : 'US DOLLAR'},
    { curr_id : 'HKD' , curr_name : 'HONG KONG DOLLAR'}

    ];

    this.asia_amt = (this.asia * 77.99) / 1000000;
    this.america_amt = (this.america * 77.99) / 1000000;
    this.brazil_amt = (this.brazil * 77.99) / 1000000;
    this.europe_amt = (this.europe * 77.99) / 1000000;
    this.paris_amt = (this.paris * 77.99) / 1000000;

    this.asia_amt_total = (this.asia_total * 77.99) / 1000000;
    this.brazil_amt_total = (this.brazil_total * 77.99) / 1000000;
    this.paris_amt_total = (this.paris_total * 77.99) / 1000000;
    this.america_amt_total = (this.america_total * 77.99) / 1000000;
    this.europe_amt_total = (this.europe_total * 77.99) / 1000000;


   }

  ngOnInit() {
  }
  getSelectedCurrency(event) {
   this.selectedCurrency = event.target.value;
   console.log(event.target.value);
    if ( this.selectedCurrency === 'EURO' ) {
    this.asia_amt = (this.asia * 77.99) / 1000000;
    this.america_amt = (this.america * 77.99 ) / 1000000;
    this.brazil_amt = (this.brazil * 77.99) / 1000000;
    this.europe_amt = (this.europe * 77.99) / 1000000;
    this.paris_amt = (this.paris * 77.99) / 1000000;

    this.asia_amt_total = (this.asia_total * 77.99) / 1000000;
    this.brazil_amt_total = (this.brazil_total * 77.99) / 1000000;
    this.paris_amt_total = (this.paris_total * 77.99) / 1000000;
    this.america_amt_total = (this.america_total * 77.99) / 1000000;
    this.europe_amt_total = (this.europe_total * 77.99) / 1000000;

    }
    if (  this.selectedCurrency === 'US DOLLAR' ) {
      this.asia_amt = (this.asia * 69.99) / 1000000;
      this.america_amt = (this.america * 69.99) / 1000000;
      this.brazil_amt = ( this.brazil * 69.99) / 1000000;
      this.europe_amt = ( this.europe * 69.99) / 1000000;
      this.paris_amt = ( this.paris * 69.99) / 1000000;

      this.asia_amt_total = (this.asia_total * 69.99) / 1000000;
      this.brazil_amt_total = (this.brazil_total * 69.99) / 1000000;
      this.paris_amt_total = (this.paris_total * 69.99) / 1000000;
      this.america_amt_total = (this.america_total * 69.99) / 1000000;
      this.europe_amt_total = (this.europe_total * 69.99) / 1000000;


    }
    if (  this.selectedCurrency === 'HONG KONG DOLLAR' ) {
      this.asia_amt = this.asia * 8.85 / 1000000;
      this.america_amt = this.america * 8.85 / 1000000;
      this.brazil_amt = this.brazil * 8.85 / 1000000;
      this.europe_amt = this.europe * 8.85 / 1000000;
      this.paris_amt = this.paris * 8.85 / 1000000;

      this.asia_amt_total = (this.asia_total * 8.85) / 1000000;
      this.brazil_amt_total = (this.brazil_total * 8.85) / 1000000;
      this.paris_amt_total = (this.paris_total * 8.85) / 1000000;
      this.america_amt_total = (this.america_total * 8.85) / 1000000;
      this.europe_amt_total = (this.europe_total * 8.85) / 1000000;

    }

  }
}
