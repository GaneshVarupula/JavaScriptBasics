import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PostComponent } // Set DataComponent as the default component
];
@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [HttpClientModule],
  //bootstrap: [AppComponent]
  bootstrap:[PostComponent]
    
    //bootstrap:[PostComponent]
})
export class AppModule { }
