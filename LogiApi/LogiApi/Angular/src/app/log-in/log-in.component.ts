import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from'./User';
import { ShipmentAppServiceService } from '../shipment-app-service.service';
import {Location } from'@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
    invalidLogin: boolean;
    user: User;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(private _enrollmentService: ShipmentAppServiceService, private _location: Location,  private http: HttpClient,
    private router: Router) { }


  success(){

    alert("Login Successfully!");
    this._location.back();
  }
  ngOnInit(): void {
  }

  login(form: NgForm){
    let credential = JSON.stringify(form.value);
    this.http.post("https://localhost:44320/api/login", credential,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      //let token = (<any>response).token;
      localStorage.setItem("jwt", response.toString());
      this.invalidLogin = false;
      console.log(response.toString());
      this.router.navigate(["Provider"]);
    }),err => {
      this.invalidLogin = true;
    }
    console.log(credential);
  }

}
