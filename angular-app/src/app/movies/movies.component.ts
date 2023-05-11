import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any[];

  constructor(){
    this.movies=[
      {
        title:"Bahubali",
        genre:"actionfilm",
        director:"Rajamouli"

      },
      {
        title:108,
        genre:"thriller",
        director:"swamy"

      },
      {
        title:"Salar",
        genre:"horror",
        director:"prasanthneel"

      },
      {
        title:123,
        genre:"action",
        director:"rana"

      },
      {
        title:"nijam",
        genre:"comedy",
        director:"nikhil"

      },
    ]
  }
  public getMovies(){
    this.movies;
  }
  ngOnInit(): void {
    
  }
}

