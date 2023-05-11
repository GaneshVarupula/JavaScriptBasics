import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { MoviesComponent } from './movies/movies.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MoviesComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap:[CarsComponent]
 // bootstrap:[MoviesComponent]
//  bootstrap:[ModelComponent]
})
export class AppModule { }
