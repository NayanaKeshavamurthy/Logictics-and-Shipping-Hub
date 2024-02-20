import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-package-estimator',
  templateUrl: './package-estimator.component.html',
  styleUrls: ['./package-estimator.component.css']
})
export class PackageEstimatorComponent implements OnInit {

  public getJsonValue : any;
  public postJsonValue : any;
  zipcode1 = "";
  zipcode2 = "";
  output: any;
  totalValue: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {

  }

  ngOnInit(): void {

  }

  public getMethod(){
      console.log("inside get method");
      console.log(this.zipcode1 + "," + this.zipcode2);
      this.http.get(`https://www.zipcodeapi.com/rest/js-GIsH1D01hVbneLhoF0vA6J0lEnevrbQJ4189eLIu4ffiUys06EwKd4cSlGGeRk9w/distance.json/${this.zipcode1}/${this.zipcode2}/km`).subscribe((data: any)=>{
      console.log(data);
      this.output = data.distance;

      if(this.zipcode1 >= "60100" && this.zipcode2<= "60500"){
        this.totalValue = this.output*10;
      }
      else if(this.zipcode1 >= "60501" && this.zipcode2<= "60999"){
        this.totalValue = this.output*20;
      }
      console.log("The total cost is:",this.totalValue)
    })
  }
}

