import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit{

  switch:string;

  constructor(){
    this.switch="off";

    } 
    clicked(){
      var x=["on","off",""];
      var z=x.indexOf(this.switch);
      if(z==2){
        z=0;
      }
      else{
        z=z+1;
      }

      this.switch=x[z];
      console.log(this.switch);
    }

  ngOnInit(): void {
    
  }


}
