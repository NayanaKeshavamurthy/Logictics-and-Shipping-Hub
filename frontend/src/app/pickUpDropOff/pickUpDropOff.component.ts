import { Component, OnInit } from '@angular/core';
import { CustomerRatingService } from 'app/customer-rating.service';



declare const L:any;


@Component({
  selector: 'app-pickUpDropOff',
  templateUrl: './pickUpDropOff.component.html',
  styleUrls: ['./pickUpDropOff.component.css']
})
export class PickUpDropOffComponent implements OnInit {
  stringifiedData: any;
  parsedJson: any;
  usersReview: any;
  reviewId1: any;
  reviewTitle1: any;
  reviewSuggestions1: any;
  review1: any;
  reviewName1: any;
  reviewId2: any;
  reviewName2: any;
  review2: any;
  reviewSuggestions2: any;
  reviewTitle2: any;
  reviewId3: any;
  reviewName3: any;
  review3: any;
  reviewSuggestions3: any;
  reviewTitle3: any;
  reviewId4: any;
  reviewName4: any;
  review4: any;
  reviewSuggestions4: any;
  reviewTitle4: any;

  constructor(private service: CustomerRatingService) { }

  ngOnInit(): void {

    if(!navigator.geolocation){
      console.log('location is not supported');
    }

    //Taking the current Location
    navigator.geolocation.getCurrentPosition((position)=>{
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let map = L.map('map').setView([latitude,longitude ], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      //Adding the marker and the circle
      let marker = L.marker([latitude, longitude]).addTo(map);
      var circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 300
    }).addTo(map);
    marker.bindPopup("<b>You are here!</b>").openPopup();

    //Multiple locations marker
    var locations = [
      ["D2D Lake Shore Warehouse", 41.840729, -87.620087],
      ["D2D Fuller Park Warehouse", 41.815082, -87.639999],
      ["D2D Bridgeport Warehouse", 41.835293, -87.651157],
      ["D2D Lake View", 41.850192, -87.617748],
      ["D2D Downtown Park", 41.880298, -87.629893],
      ["D2D Cicero", 41.84092, -87.755356],
      ["D2D Midway International DropOff",41.779505, -87.749176],
      ["D2D Aurora", 41.740578, -88.316345]
    ];

      for (var i = 0; i < locations.length; i++) {
        marker = new L.marker([locations[i][1], locations[i][2]])
          .bindPopup(locations[i][0])
          .addTo(map);
      }
   })
    this.watchPosition();
    this.getDataFromAPI();
  }

  watchPosition(){
    let desLat= 0;
    let desLon =0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if(position.coords.latitude === desLat){
        navigator.geolocation.clearWatch(id);
      }
      },
      (err)=> {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout:5000,
        maximumAge:0
      }
    )}


    getDataFromAPI(){
      this.service.getData().subscribe((res: any)=>{
        console.log("res" ,res);

        //Review 1
        this.reviewId1 = res[0].id;
        this.reviewName1 = res[0].reviewerName;
        this.review1= res[0].review;
        this.reviewSuggestions1 = res[0].suggestions;
        this.reviewTitle1  = res[0].title;

        //Review 2
        this.reviewId2 = res[1].id;
        this.reviewName2 = res[1].reviewerName;
        this.review2= res[1].review;
        this.reviewSuggestions2 = res[1].suggestions;
        this.reviewTitle2  = res[1].title;

        //Review 3
        this.reviewId3 = res[2].id;
        this.reviewName3 = res[2].reviewerName;
        this.review3 = res[2].review;
        this.reviewSuggestions3 = res[2].suggestions;
        this.reviewTitle3  = res[2].title;

        //Review 4
        this.reviewId4 = res[4].id;
        this.reviewName4 = res[4].reviewerName;
        this.review4 = res[4].review;
        this.reviewSuggestions4 = res[4].suggestions;
        this.reviewTitle4 = res[4].title;

      }, (err)=>{
        console.log(err)
      })
    }
    reviewName(reviewName: any) {
      throw new Error('Method not implemented.');
    }
    review(review: any) {
      throw new Error('Method not implemented.');
    }
    reviewSuggestions(reviewSuggestions: any) {
      throw new Error('Method not implemented.');
    }
    reviewTitle(reviewTitle: any) {
      throw new Error('Method not implemented.');
    }
}
