import { AuthService } from 'app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-reschedule-delivery',
  templateUrl: './reschedule-delivery.component.html',
  styleUrls: ['./reschedule-delivery.component.css']
})
export class RescheduleDeliveryComponent implements OnInit {

  success= false;

  oid!:string;
  date !:string;

  constructor(private fb: FormBuilder, private auth:AuthService,private orderService: OrderService) { }

  ngOnInit(): void {
  }
  updateReschedule(){
    console.log(this.oid);
    var dDate =this.date.split("-").reverse().join("/");
    console.log(dDate);
    this.orderService.orderReschedule(this.oid,dDate).subscribe((msg) => {
      console.log(msg);});
      this.success = true;
  }
}
