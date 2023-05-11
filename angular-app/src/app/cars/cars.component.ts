import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:any[];
  hide:boolean;

  constructor(){
    
    this.cars=[
     {
      make:"BMW",
      model:"8Series",
      year:2019
     },
     {
      make:"RangeRover",
      model:"10Series",
      year:2014
     },
     {
      make:"ferrari",
      model:"9Series",
      year:2011
     },
    ]
    this.hide=true;
  }
   public getCars(){
    return this.cars;
   }
   toggle(){
    console.log(this.hide);
    this.hide=!this.hide;
   }
   ngOnInit(): void {
     
   }
}
