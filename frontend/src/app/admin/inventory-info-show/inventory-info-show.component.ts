import { OrderService } from 'app/services/order.service';
import { CustomerRatingService } from './../../customer-rating.service';
import { Component, OnInit } from '@angular/core';

import {Chart} from 'chart.js/auto';


@Component({
  selector: 'app-inventory-info-show',
  templateUrl: './inventory-info-show.component.html',
  styleUrls: ['./inventory-info-show.component.css']
})
export class InventoryInfoShowComponent implements OnInit {

  oStatus1: any;

  result : any[] = [];

  constructor(private service: CustomerRatingService, private order:OrderService) { }


   ngOnInit(): void {
    this.getWarehouseData();

    console.log("fetched the wear house data");
    console.log(this.result);

  }




  fetchlist:Array<{o_id: string, oStatus: number}> = []

  inlist:Array<{o_id: string, oStatus: number}> = []

  dellist:Array<{o_id: string, oStatus: number}> = []

  graphdata:Array<{status: string, count: number}> = []

  graphlist(){

    console.log("inside graph list");
    console.log("asdasd", this.result);

    console.log("asdasd", this.result.length);

    let fetching :number= 0
    let inside :number= 0
    let delivered:number = 0

    for(let i =0; i< this.result.length; i++){

      console.log("listing the item ",this.result[i]);

      if(this.result[i].oStatus == 2){
        fetching = fetching + 1;
      }
      if(this.result[i].oStatus == 3){
        inside = inside + 1;
      }
      if(this.result[i].oStatus == 4){
        delivered = delivered + 1
      }
    };
    this.graphdata.push({status: 'PickedUp', count: fetching});

    console.log(fetching);

    this.graphdata.push({status: 'At From Wearhouse', count: inside})
    this.graphdata.push({status: 'At To Wearhouse', count: delivered})
  }


  getWarehouseData(){



    this.order.getWarehouse1Data1().subscribe((res: any)=>{
       console.log(res);

      var n:number = res.length;

      for(let i=0;i<n;i++){

        this.result.push(res[i]);


        if(res[i].oStatus == 2){
          this.fetchlist.push(res[i])
        }

        if(res[i].oStatus == 3){
          this.inlist.push(res[i])
        }

        if(res[i].oStatus == 4){
          this.dellist.push(res[i])
        }

      }

      this.graphlist()
    // console.log(this.graphdata)

    new Chart(
      "myChart",
      {
        type: 'bar',
        data: {
          labels: this.graphdata.map(row => row.status),
          datasets: [
            {
              label: 'Numer of packages',
              data: this.graphdata.map(row => row.count)
            }
          ]
        }
      }
    );









    })
  };

}
