import { AuthService } from 'app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-update-pickup',
  templateUrl: './update-pickup.component.html',
  styleUrls: ['./update-pickup.component.css']
})
export class UpdatePickupComponent implements OnInit {

  oid !:string;
  flag = false;
  top !:string;
  details :any;
  success = false;
  public showDateInput = false;

radioValueCheck(x:any) {
    this.showDateInput = (x === 1);
}

  constructor(private fb: FormBuilder, private auth:AuthService,private orderService: OrderService) { }

  ngOnInit(): void {
  }



  updatePickup(form:any){
    var status ='1';

    console.log(this.oid);
    this.orderService.orderPicked(this.oid,status).subscribe((msg) => {
      console.log(msg);});
      this.success = true;
  }



  getPickupData(){
    console.log(this.oid);
    this.orderService.getPickupData(this.oid).subscribe((res) => {
      console.log(res[0]);
      this.details = res[0];
      this.oid = res[0].o_id;
      console.log("printing", this.details);
      this.flag = true;
      console.log(this.details.typeOfPackage);
      if(this.details.typeOfPackage == "1"){
        this.top = "Envelope";
      }
      if(this.details.typeOfPackage == "2"){
        this.top = "Small Box";
      }
      if(this.details.typeOfPackage == "3"){
        this.top = "Large Box";
      }

      console.log(this.top);

  });







  }
}
