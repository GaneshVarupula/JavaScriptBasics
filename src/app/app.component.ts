import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decorato';
  parentData: string = '';
  message: string = '';

  receiveMessage($event: any) {
    this.message = $event;
}
}
