import { Component ,OnInit} from '@angular/core';

import { CountriesService } from 'src/app/service/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{

  //variable
  public data:any;

  constructor(private _service:CountriesService){}
 
   //lets write logic here
  ngOnInit(): void {
    this._service.getCountries().subscribe(
      (response:any)=>{
        this.data =response;
      },
      (error:any)=>{
        console.error(error)
      }


    )
  }
}
