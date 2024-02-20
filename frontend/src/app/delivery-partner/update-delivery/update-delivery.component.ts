import { AuthService } from 'app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-update-delivery',
  templateUrl: './update-delivery.component.html',
  styleUrls: ['./update-delivery.component.css']
})
export class UpdateDeliveryComponent implements OnInit {

    success = false;
    oid!:string;
    constructor(private fb: FormBuilder, private auth:AuthService,private orderService: OrderService) { }

    ngOnInit(): void {
    }
    updateDelivery(){
      console.log(this.oid);
      var status ='6';

      console.log(this.oid);
      this.orderService.orderDelivered(this.oid,status).subscribe((msg) => {
        console.log(msg);});
        this.success = true;
    }

}
