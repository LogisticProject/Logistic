import { Component, OnInit } from '@angular/core';
import {addContact} from'./addContact';
import{ShipmentAppServiceService} from'../shipment-app-service.service';
import { Location } from'@angular/common';
import { Title } from'./Title';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  Cont = new  addContact('','','','','','','') ;
  Tit = new Title('');
  submit = false;
  errorMsg = ';'
  constructor(private ser: ShipmentAppServiceService, private location: Location) { }

  ngOnInit(): void {
    console.log(this.Cont);
    this.ser.getTitle()
    .subscribe(
      data =>  console.log('success!', data),
      error => console.log('Error!', error)

    );
  }

  onSubmit(){

    console.log(this.Cont);
    this.ser.Addcontact(this.Cont)
    .subscribe(
      data => console.log('success!', data),
      error => console.log('Error!', error)

    );
  }
}
