import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('cardDetails')cardDetails={};
  arrayData;
  constructor(public http: HttpClient) { }

  ngOnInit() { this.http.get("http://localhost:8000/myjson")
  .toPromise()
  .then((response) => {
    // console.log(response);
    this.arrayData = response;
  }, (error)=>{
    console.log(error);
  })
  }

}
