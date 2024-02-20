
import { AuthService } from 'app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order.service';
import { Observable } from "rxjs";
import { Router } from "@angular/router";

export class orderModify {
  public o_id!: string;
  public uId!: string;
  public orderStatus!: string;
  public pDate!: string;
  public dDate !:string;
  public sp!:string;
 }


@Component({
  selector: 'app-modify-order',
  templateUrl: './modify-order.component.html',
  styleUrls: ['./modify-order.component.css']
})
export class ModifyOrderComponent implements OnInit {

  orderModify!: Observable<orderModify>;

  oid !:string;
  u_id ='';
  pDate ='';
  o_status ='';
  dDate ='';
  notPick = false;
  get = true;
  got = false;

  constructor(private router :Router, private fb: FormBuilder, private auth:AuthService,private orderService: OrderService) { }

  ngOnInit(): void {
    this.u_id = this.auth.id
  }



  submitModify(modiyForm:any){
    console.log("inside the modifed");
    console.log(this.dDate);
  //   this.orderService.modifyOrder(this.oid,this.dDate).subscribe((msg) => {
  //     console.log(msg);});


  // }
  this.orderService.modifyOrder(this.oid, this.dDate).subscribe(
    (msg) => {
      console.log(msg);
      alert("Order Modified successfully"); // Display alert
    },
    (error) => {
      console.error("Error modifying order:", error);
    }
  );
}




  onSubmit(form:any){
    console.log("fetching the order");

    this.orderService.viewModiy(this.oid).subscribe((res) => {
      console.log(res[0]);

      this.oid = res[0].o_id;
      this.o_status = res[0].orderStatus ;
      this.pDate = res[0].pDate;

      this.get = false;
      this.got = true;
      console.log("inside",this.o_status);

      if(this.o_status == '0'){
        this.o_status = 'Order Placed';
        this.notPick = true;
      }
      else {
        this.notPick = false;
      }
      


    });




  }

  public logout(){
    this.auth.id = '';


    console.log("clicked logout button");
    this.router.navigate(["home"]);

  }
}
