import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyifDirective } from './my-directive/myif.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    MyifDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
    
    // bootstrap:[MyifDirective]
})
export class AppModule { }
