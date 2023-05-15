import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
import {OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  data1 :PostService =new PostService(4,'mani');

  constructor(private http: HttpClient) {

   }
   ngOnInit() {
    this.postData(this.data1);
  }

  postData(data: PostService) {
    const url = 'http://localhost:3000/users';
    this.http.post(url, data).subscribe(
      response => {
        console.log('Data posted successfully:', response);
      },
      error => {
        console.error('Error posting data:', error);
      }
    );
  }

  
  
}
