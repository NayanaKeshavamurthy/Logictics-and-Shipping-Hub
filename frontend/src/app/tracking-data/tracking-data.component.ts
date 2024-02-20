
import { TrackingdataService } from 'app/services/trackingdata.service';


import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order.service';


@Component({
  selector: 'app-tracking-data',
  templateUrl: './tracking-data.component.html',
  styleUrls: ['./tracking-data.component.css']
})
export class TrackingDataComponent implements OnInit {


  picked = false;
  oInOw = false;
  oLfOw = false;
  oInNw = false;
  ofd = false;
  dvd = false;

  oid ='';
  eta = '';

  public id!:string;

  constructor(private track : TrackingdataService, private orderService: OrderService ) { }

  ngOnInit(): void {

    console.log(this.track.o_id);
    this.oid = this.track.o_id
    this.orderService.viewModiy(this.track.o_id).subscribe((res) => {
      console.log(res[0]);

      var status = res[0].orderStatus;
      this.eta = res[0].dDate;



      if(status == '1'){
        this.picked = true;
      }
      if(status == '2'){
        this.picked = true;
        this.oInOw = true;
      }
      if(status == '3'){
        this.picked = true;
        this.oInOw = true;
        this.oLfOw = true;
      }

      if(status == '4'){
        this.picked = true;
        this.oInOw = true;
        this.oLfOw = true;
        this.oInNw = true;
      }


      if(status == '5'){
        this.picked = true;
        this.oInOw = true;
        this.oLfOw = true;
        this.oInNw = true;
        this.ofd = true;
      }
      if(status == '6'){
        this.picked = true;
        this.oInOw = true;
        this.oLfOw = true;
        this.oInNw = true;
        this.ofd = true;
        this.dvd = true;
      }





    });

  }

}
