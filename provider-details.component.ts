import { Component, OnInit } from '@angular/core';
import { ShipmentAppServiceService } from'../shipment-app-service.service';
import {ActivatedRoute} from'@angular/router';
import{ Location } from'@angular/common';
@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {
public provider;
public contact;
public errorMsg;
Id:number;

  constructor(private serv: ShipmentAppServiceService, private AR: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.Id = this.AR.snapshot.params["Id"];
    this.serv.getProvidersByID(this.Id).subscribe(
      data => {this.provider = data;console.log(this.provider)
          this.serv.getContact().subscribe(
            data => {console.log("Here "),this.contact = data,console.log(data)},
            error => {console.log("errror in contact"),console.log(error)}
          );
      }
    );


  }


}
