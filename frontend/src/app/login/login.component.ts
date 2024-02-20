import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';




import { AuthService } from "../services/auth.service";

export class User {
  public email!: string;
  public password!: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new User();

  customer_type ="";





  constructor(private fb: FormBuilder, private authService: AuthService, ) { }

  ngOnInit(): void {
  }


  onSubmit(form :any ) {
    console.log(this.model.email + " is the email");
    console.log(this.model.password + " is the password");
    console.log(this.customer_type + " value");

    console.log(form.value.email);

    this.authService
    .login(form.value.email, form.value.password)
    .subscribe((res)=> {
      console.log(res + "response from backend");
    });

    
  }
}
