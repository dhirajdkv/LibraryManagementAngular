import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
arrayData;
currentParamaterId;
// @Input('bookDetails')bookDetails={};
// @ViewChild('title') title:ElementRef;

  constructor(public route:ActivatedRoute,private router: Router,public http: HttpClient) {
    this.currentParamaterId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() { 
    this.http.get(`http://localhost:8000/myjson/${this.currentParamaterId}`)
  .toPromise()
  .then((response) => {
    this.arrayData = response;
    console.log("success")
  },(error)=>{
    console.log(error)
  })
  }

  myFunc(title: String,author: String,ISBN: String,price: String,ratting: Number,department: String,description: String)
  {
  var total = {
    "id":this.currentParamaterId,
    "title": title,
    "coverImage": this.arrayData.coverImage,
    "description": description,
    "author": author,
    "department": department,
    "ISBN": ISBN,
    "price": price,
    "ratting": ratting
};
console.log(total)
  this.http.put(`http://localhost:8000/myjson/${this.currentParamaterId}`,total)
  .toPromise()
  .then((response) => {
    this.router.navigate(['bloglist']);
    console.log("success")
  },(error)=>{
    console.log(error)
  })

}

}
