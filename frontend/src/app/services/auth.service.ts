import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000/auth";



  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);


  name!: Pick<User, "name">;
  id  = '';


  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  register(user:  User): Observable<User> {
    console.log("inside register auth");
    return this.http
      .post<User>(`${this.url}/register`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("register"))
      );
  }

  login(
    email: Pick<User, "email">,
    password: Pick<User, "password">
  ): Observable<{
    token: string;
    name: Pick<User, "name">;
    id : string;
  }> {
    return this.http
    .post<{
      token: string;
      name: Pick<User, "name">;
      id :string;
    }>(`${this.url}/login`, { email, password }, this.httpOptions)
    .pipe(
      first(),
        tap((tokenObject: { token: string; name: Pick<User, "name">; id:string }) => {
          this.name = tokenObject.name;
          this.id = tokenObject.id;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(["customerLogin"]);
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            name: Pick<User, "name">;
            id : string;
          }>("login")
        )
      );
  }

}
