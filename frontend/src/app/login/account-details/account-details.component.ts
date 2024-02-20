import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private authService:AuthService, private router :Router) { }

  ngOnInit(): void {
  }

  public logout(){
    this.authService.id = '';


    console.log("clicked logout button");
    this.router.navigate(["home"]);

  }

}
