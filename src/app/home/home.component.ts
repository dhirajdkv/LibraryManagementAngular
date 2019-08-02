import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
arrayData;
  constructor(public http: HttpClient) { 
   
  }

  ngOnInit() {
    this.http.get('http://localhost:8000/myjson')
    .toPromise()
    .then((response) => {
      // console.log(response);
      this.arrayData = response;
    }, (error)=>{
      console.log(error);
    })
  }

  title = 'project2';
  inputValue = "Passed from TS";
  mySmartProperty = "Two Way Data Binding";
  disableOffer4 = true;
  filterValue="";

  listData = [
    {
      imageUrl: "http://placehold.it/50x50",
      title: "Apple",
      description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    },
    {
      imageUrl: "http://placehold.it/50x50",
      title: "Apple",
      description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    },
    {
      imageUrl: "http://placehold.it/50x50",
      title: "Orange",
      description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    }
  ];



  /*card1Details = {
    title: 'Offer 1',
    description: 'Loren ipsum hrheh hhdhfeu',
    imgUrl: 'http://placehold.it/500x300?text=Image 1',
    id :1
  }

  card2Details = {
    title: 'Offer 2',
    description: 'Loren ipsum hrheh hhdhfeu',
    imgUrl: 'http://placehold.it/500x300?text=Image 2',
    id :2
  }

  card3Details = {
    title: 'Offer 3',
    description: 'Loren ipsum hrheh hhdhfeu',
    imgUrl: 'http://placehold.it/500x300?text=Image 2',
    id :3
  }

  card4Details = {
    title: 'Offer 4',
    description: 'Loren ipsum hrheh hhdhfeu',
    imgUrl: 'http://placehold.it/500x300?text=Image 2',
    id :4
  }*/

 

  sendMeAlert() {
    alert("Hey World!");
  }

  displayCard() {
    this.disableOffer4 = !this.disableOffer4;
  }

  addList(){
    this.listData.push({
      imageUrl: "http://placehold.it/50x50",
      title: "List " + (this.listData.length + 1),
      description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    })
  }

}
