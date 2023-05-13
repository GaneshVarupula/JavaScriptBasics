import { Component } from '@angular/core';
import { MyifDirective } from './my-directive/myif.directive';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
  
  
})
export class AppComponent {
  title = 'customdirectives';
  showTitle:boolean=true;

  toggleTitle(){
    this.showTitle=!this.showTitle;
  }
}
