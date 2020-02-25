import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from'./User';
import { ShipmentAppServiceService } from '../shipment-app-service.service';
import {Location } from'@angular/common';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

    user: User;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(private _enrollmentService: ShipmentAppServiceService, private _location: Location) { }


  success(){

    alert("Login Successfully!");
    this._location.back();
  }
  ngOnInit(): void {
  }

  onSubmit(){
    

  }

}
