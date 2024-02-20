
import { AuthService } from 'app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order.service';
import { Observable } from "rxjs";
import { Router } from "@angular/router";

export class orderModify{
  public o_id!: string;
  public uId!: string;
  public orderStatus!: string;
  public pDate!: string;
  public dDate !:string;
  public sp!:string;
 }

@Component({

  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  resultJson :orderModify[] = [];
  flag = false;



  constructor( private authService:AuthService, private router :Router, private fb: FormBuilder,private orderService: OrderService) { }

  ngOnInit(): void {
    console.log("value of user id" +this.authService.id+".");
    this.orderService.viewOrder(this.authService.id).subscribe((res) => {
      console.log(res.length);

      var noRes :number = res.length;


      for(let i:number =0; i < noRes; i++){

        this.resultJson.push(res[i]);
        if(res[i].orderStatus == '0'){
          this.resultJson[i].orderStatus = "Order Placed"
          continue;
        }
        if(res[i].orderStatus == '1'){
          this.resultJson[i].orderStatus = "Order Picked"
          continue;
        }
        if(res[i].orderStatus == '2'){
          this.resultJson[i].orderStatus = "Order in origin wear house"
          continue;
        }
        if(res[i].orderStatus == '3'){
          this.resultJson[i].orderStatus = "Order left to near by wear house"
          continue;
        }
        if(res[i].orderStatus == '4'){
          this.resultJson[i].orderStatus = "Order reached to near by wear house"
          continue;
        }
        if(res[i].orderStatus == '5'){
          this.resultJson[i].orderStatus = "Out for delivery"
          continue;
        }
        if(res[i].orderStatus == '6'){
          this.resultJson[i].orderStatus = "Order Delivered"
          continue;
        }


      }

      console.log(this.resultJson);

      console.log(this.resultJson.length);
      this.flag = true;


    });

  }

  public logout(){
    this.authService.id = '';


    console.log("clicked logout button");
    this.router.navigate(["home"]);

  }

}
