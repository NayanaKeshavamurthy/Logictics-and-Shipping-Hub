import { Component, OnInit } from '@angular/core';
import { CustomerRatingService } from 'app/customer-rating.service';
import { Router } from "@angular/router";
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-rate-us-comp',
  templateUrl: './rate-us-comp.component.html',
  styleUrls: ['./rate-us-comp.component.css']
})
export class RateUsCompComponent implements OnInit {

  constructor(private customerService: CustomerRatingService,private authService:AuthService, private router :Router) { }

  ngOnInit(): void {
  }

  sendUserData(products: {reviewerName: String, orderId: Number, rating:Number, title: String, suggestions: String, review: String}){
    console.log(products);
    this.customerService.onProductCreate(products);
  }

  public logout(){
    this.authService.id = '';


    console.log("clicked logout button");
    this.router.navigate(["home"]);

  }

}
