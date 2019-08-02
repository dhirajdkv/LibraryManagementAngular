import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})     
export class BlogComponent implements OnInit {
  currentParamaterId;
  arrayData;
  constructor(public route:ActivatedRoute,public http: HttpClient) { 
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.currentParamaterId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.http.get("http://localhost:8000/myjson/"+this.currentParamaterId)
    .toPromise()
    .then((response) => {
      console.log(response);
      this.arrayData = response;
      console.log(response)
    }, (error)=>{
      console.log(error);
    })
  }

}
