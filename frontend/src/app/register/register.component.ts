import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { AuthService } from 'app/services/auth.service';


export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public mobile!: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new User();


  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router ) { }

  ngOnInit(): void {


  }

  onSubmit(form: any) {
    console.log(form.value);
    console.log(form.value.name);

    this.authService.register(form.value).subscribe((msg) => {
                                              console.log(msg);
                                              this.router.navigate(["login"]);

                                            });

  }


}
