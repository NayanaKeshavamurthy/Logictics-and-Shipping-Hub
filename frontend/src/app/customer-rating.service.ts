import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';


const baseUrl0 = 'http://127.0.0.1:3000/fetch';
const warehouse1 = 'http://localhost:3000/warehouse1';

@Injectable({
  providedIn: 'root'
})
export class CustomerRatingService {

  constructor(private http: HttpClient) { }

  getData(){
    console.log("Entered getData")
    return this.http.get(baseUrl0);
  }

  onProductCreate(productObj:any){
    // console.log(products);
    // this.http.post('http://127.0.0.1:27017/post', productObj).subscribe((res: any)=>{
    //   console.log(res);
      
    // })
    
    this.http.post('http://127.0.0.1:3000/post', productObj).subscribe(
  (res: any) => {
    console.log(res);
  },
  (error) => {
    console.error('Error:', error);
  }
);
  }

  getWarehouse1Data(){
    return this.http.get(warehouse1);
  }
}
