import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  arrayData;
  currentParamaterId;
  constructor(public route:ActivatedRoute,private router: Router,public http: HttpClient) { 

  }

  ngOnInit() {
  }

  myFunc(title: String,author: String,ISBN: String,price: String,ratting: Number,department: String,description: String,coverImage: String)
  {
  var total = {
    "title": title,
    "coverImage": coverImage,
    "description": description,
    "author": author,
    "department": department,
    "ISBN": ISBN,
    "price": price,
    "ratting": ratting
};
console.log(total)
  this.http.post(`http://localhost:8000/myjson/`,total)
  .toPromise()
  .then((response) => {
    this.router.navigate(['bloglist']);
    console.log("success")
  },(error)=>{
    console.log(error)
  })

}

}
