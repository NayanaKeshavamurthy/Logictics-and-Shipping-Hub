import { Component, OnInit } from '@angular/core';
import { CustomerRatingService } from 'app/customer-rating.service';


@Component({
  selector: 'app-inventory-info',
  templateUrl: './inventory-info.component.html',
  styleUrls: ['./inventory-info.component.css']
})
export class InventoryInfoComponent implements OnInit {

  constructor(private service: CustomerRatingService) { }

  ngOnInit(): void {
    this.getWarehouseData();
  }

  getWarehouseData(){
    this.service.getWarehouse1Data().subscribe((res: any)=>{
      console.log(res);
    })
  };

}
