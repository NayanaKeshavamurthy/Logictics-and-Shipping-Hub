import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { User } from "../models/User";
import { Order} from "../models/Order";

import { ErrorHandlerService } from "./error-handler.service";


export class orderModify{
  public o_id!: string;
  public uId!: string;
  public orderStatus!: string;
  public pDate!: string;
  public dDate !:string;
  public sp!:string;
 }

export class modifyPDate{
  public o_id!: string;
  public pDate!: string;
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  o_Modify = new orderModify();
  private url = "http://localhost:3000/order";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };



  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router) { }

    orderDelivered(oid:string, status:string): Observable<orderModify> {
      console.log("inside Order Delivered");

      return this.http
        .post<orderModify>(`${this.url}/orderDelivered`, {oid,status}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("orderPicked"))
        );
    }

    orderReschedule(oid:string, dDate:string): Observable<orderModify> {
      console.log("inside ORder reschedule");

      return this.http
        .post<orderModify>(`${this.url}/orderReschedule`, {oid,dDate}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("orderPicked"))
        );
    }

    orderPicked(oid:string, status:string): Observable<orderModify> {
      console.log("inside Place Order");

      return this.http
        .post<orderModify>(`${this.url}/orderPicked`, {oid,status}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("orderPicked"))
        );
    }

    modifyOrder(oid:string, p_Date:string): Observable<orderModify> {
      console.log("inside Place Order");
      var mod = new modifyPDate();

      mod.o_id = oid;
      mod.pDate = p_Date;
      return this.http
        .post<orderModify>(`${this.url}/modifyOrder`, mod, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("modifyOrder"))
        );
    }


    placeOrder(order:  Order): Observable<Order> {
      console.log("inside Place Order");
      return this.http
        .post<Order>(`${this.url}/placeOrder`, order, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<Order>("placeOrder"))
        );
    }

    viewModiy(oid:  string): Observable<orderModify[]> {
      console.log("inside Place Order");
      return this.http
        .get<orderModify[]>(`${this.url}/viewModify/${oid}` ,{ responseType: "json" })
        .pipe(
          catchError(this.errorHandlerService.handleError<orderModify[]>("fetchAll",[]))
        );

    }

    viewOrder(u_id:  string): Observable<orderModify[]> {
      console.log("inside Place Order");
      return this.http
        .get<orderModify[]>(`${this.url}/viewOrder/${u_id}` ,{ responseType: "json" })
        .pipe(
          catchError(this.errorHandlerService.handleError<orderModify[]>("fetchAll",[]))
        );

    }

    getPickupData(oid:string):Observable<Order[]>{
      console.log("inside get PickupData");
      return this.http
        .get<Order[]>(`${this.url}/getPickup/${oid}` ,{ responseType: "json" })
        .pipe(
          catchError(this.errorHandlerService.handleError<Order[]>("getPickupData",[]))
        );
    }

    getWarehouse1Data1(): Observable<{}>{
      return this.http
        .get<{}>(`${this.url}/getWarehouse1Data1` ,{ responseType: "json" })
        .pipe(
          catchError(this.errorHandlerService.handleError<Order[]>("getPickupData",[]))
        );
    }


    insertWearHouse1(oid:string, status:string): Observable<orderModify> {
      console.log("inside Place Order");

      return this.http
        .post<orderModify>(`${this.url}/insertWearHouse1`, {oid,status}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("modifyOrder"))
        );
    }

    updateWearHouse1(oid:string, status:string): Observable<orderModify> {
      console.log("inside Place Order");

      return this.http
        .post<orderModify>(`${this.url}/updateWearHouse1`,  {oid,status}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("modifyOrder"))
        );
    }

    insertWearHouse2(oid:string, status:string): Observable<orderModify> {
      console.log("inside Place Order");

      return this.http
        .post<orderModify>(`${this.url}/insertWearHouse2`,  {oid,status}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("modifyOrder"))
        );
    }

    updateWearhouse2(oid:string, status:string): Observable<orderModify> {
      console.log("inside Place Order");

      return this.http
        .post<orderModify>(`${this.url}/updateWearhouse2`,  {oid,status}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("modifyOrder"))
        );
    }

    insertWearHouse3(oid:string, status:string): Observable<orderModify> {
      console.log("inside Place Order");

      return this.http
        .post<orderModify>(`${this.url}/insertWearHouse3`,  {oid,status}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("modifyOrder"))
        );
    }

    updateWearhouse3(oid:string, status:string): Observable<orderModify> {
      console.log("inside Place Order");

      return this.http
        .post<orderModify>(`${this.url}/updateWearhouse3`,  {oid,status}, this.httpOptions)
        .pipe(
          first(),
          catchError(this.errorHandlerService.handleError<orderModify>("modifyOrder"))
        );
    }

}
