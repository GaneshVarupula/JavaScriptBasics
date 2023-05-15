import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



export class PostService {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

   


