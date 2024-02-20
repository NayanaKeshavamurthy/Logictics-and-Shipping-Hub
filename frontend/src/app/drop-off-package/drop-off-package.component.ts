import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { AuthService } from 'app/services/auth.service';
import { OrderService } from 'app/services/order.service';



export class Order {
 public o_id!: string;
 public fName!: string;
 public dName!: string;
 public fAdd!: string;
 public fCity!: string;
 public fZip!: string;
 public fState!: string;
 public dAdd!: string;
 public dCity!: string;
 public dZip!: string;
 public dState!: string;
 public top!: string;
 public fMobile!: string;
 public dMobile!: string;
 public uId!: string;
 public o_status!: string;
 public pDate!: string;
 public dDate !:string;
}

@Component({
  selector: 'app-drop-off-package',
  templateUrl: './drop-off-package.component.html',
  styleUrls: ['./drop-off-package.component.css']
})


export class DropOffPackageComponent implements OnInit {

  order = new Order();
  f_apt = "";
  d_apt = "";
  o_id = "";
  numPkg = 0;
  weight = 0;
  calc = false;
  price = 0;
  uId = '';

  add_section = true;
  pkg_section = false;
  payment_section = false;

  constructor(private fb: FormBuilder, private orderService: OrderService,private router: Router,private auth: AuthService) { }

  ngOnInit(): void {

    this.add_section = true;
    this.pkg_section = false;
    this.payment_section = false


    this.uId = this.auth.id;

    this.auth.id = this.uId;
    
    console.log("Auth ID is ",this.auth.id);
  }

  onSubmit(form:any) {

    this.order = form.value;

    const currentDate = new Date();
    var dd = currentDate.getDate().toString();
    var mm = currentDate.getMonth().toString();
    var yy = currentDate.getFullYear().toString();
    var hh = currentDate.getHours().toString();
    var ss = currentDate.getMinutes().toString();
    var ms =  currentDate.getMilliseconds().toString();

    this.o_id = this.order.fName.slice(0,3) + dd + mm + yy +hh+ss+ms + this.order.dName.slice(0,2);
    this.order.o_id = this.o_id;
    this.order.top = "2";
    console.log(this.o_id);

    this.order.fAdd = this.order.fAdd + " unit " + form.value.f_apt;
    this.order.dAdd =  this.order.dAdd+ " unit " + form.value.d_apt;
    console.log("The from Address is : ");
    console.log(this.order.fAdd);
    console.log("The To Address is : ");
    console.log(this.order.dAdd);
    console.log(currentDate);


    this.order.uId = this.uId;

    console.log(this.order);

    this.add_section = false;
    this.pkg_section = true;

    // this.orderService.placeOrder(form.value).subscribe((msg) => {
    //   console.log(msg);

    // });

  }

  onSelectType(form:any){

    console.log(this.order.top);
    console.log(form.value);

    console.log(this.numPkg);
    console.log(this.weight);

    var option = this.order.top;

    if(option == '1'){

      this.price = 5.0 * this.numPkg;
    }
    else if(option == '2'){
      this.price = 20 * this.numPkg + 3 * this.weight;
    }
    else if(option == '3'){
      this.price = 30 * this.numPkg + 3 * this.weight;
    }
    this.calc=true;


    this.pkg_section = false;
    this.payment_section = true;
  }

  private findDistance(fZip : string, dZip:string) {

    var zipFrom: number =  + fZip;
    var zipDist: number = + dZip;


   var  distance : number = 10;
    return distance;

  }

  payment(){



    this.order.o_status = '0';

     var date = new Date();

     this.order.pDate = date.getDate().toString() + "/" +(date.getMonth() +1).toString() + "/" +date.getFullYear().toString() ;


    var distance : number = this.findDistance(this.order.fZip, this.order.dZip);

    if (distance < 30){

    date.setDate(date.getDate() +3);

    this.order.dDate = date.getDate().toString() + "/" + (date.getMonth() +1).toString() + "/" +date.getFullYear().toString() ;


    }

     console.log(this.order);






    this.auth.id = this.uId;
    console.log("UID: ",this.uId);

    this.orderService.placeOrder(this.order).subscribe((msg) => {
      console.log(msg);
      this.router.navigate(['viewOrder'])

    });


  }
}
