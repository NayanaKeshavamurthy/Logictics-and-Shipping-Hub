import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { AuthService } from 'app/services/auth.service';
import { OrderService } from 'app/services/order.service';


@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  status =''
  wearhouse =''
  oid = ''


  constructor(private fb: FormBuilder, private orderService: OrderService,private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form :any){

    
    console.log(this.status)
    console.log(this.wearhouse)
    console.log(this.oid)

    if(this.wearhouse == '1'){

      if(this.status == '2' || this.status == '4'){

        console.log("insert in wear house 1")

        this.orderService.insertWearHouse1(this.oid,this.status).subscribe((msg) => {
          console.log(msg);

          this.router.navigate(['admin'])

        });
      }

      else{
        console.log("update in wearhouse 1")
        this.orderService.updateWearHouse1(this.oid,this.status).subscribe((msg) => {
          console.log(msg);
          this.router.navigate(['admin'])

        });
      }
    }
    else if(this.wearhouse == '2'){

      if(this.status == '2' || this.status == '4'){

        console.log("insert in wear house 2")
        this.orderService.insertWearHouse2(this.oid,this.status).subscribe((msg) => {
          console.log(msg);
          this.router.navigate(['admin'])

        });
      }

      else{
        console.log("update in wearhouse 2")
        this.orderService.updateWearhouse2(this.oid,this.status).subscribe((msg:any) => {
          console.log(msg);
          this.router.navigate(['admin'])

        });
      }
    }
    else if(this.wearhouse == '3'){

      if(this.status == '2' || this.status == '4'){

        console.log("insert in wear house 3")
        this.orderService.insertWearHouse3(this.oid,this.status).subscribe((msg) => {
          console.log(msg);
          this.router.navigate(['admin'])

        });
      }

      else{
        this.orderService.updateWearhouse3(this.oid,this.status).subscribe((msg:any) => {
          console.log(msg);
          this.showAlert();

          this.router.navigate(['admin'])

        });
      }
    }


  }
  showAlert() {
    // Display an alert with the message "Update Successful"
    alert('Update Successful');
  }

}
