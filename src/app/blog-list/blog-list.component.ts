import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
}) 
export class contact
export class BlogListComponent implements OnInit {
  arrayData;
  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadData(); 
  }

  loadData(){
    this.http.get("http://localhost:8000/myjson")
  .toPromise()
  .then((response) => {
    this.arrayData = response;
    console.log(response)
  },(error)=>{
    console.log(error)
  })
  }

  myFunc(id){
       this.http.delete(`http://localhost:8000/myjson/${id}`)
    .toPromise()
    .then((response) => {
      // this.arrayData = response;
      console.log(response)
      this.loadData();
    },(error)=>{
      console.log(error)
    })
    }
    
  }

