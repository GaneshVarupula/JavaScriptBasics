import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  isActive:boolean=false;
  c:string='';

  toggleActive(){
    this.c='Ganesh';
    this.isActive=!this.isActive;
  }

}
