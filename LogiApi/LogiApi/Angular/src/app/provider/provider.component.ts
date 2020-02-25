import { Component, OnInit } from '@angular/core';
import { Provider } from'../provider';
import { ShipmentAppServiceService } from'../shipment-app-service.service';



@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
public Provider = [];
public errorMsg;
  constructor(private ProviderSer: ShipmentAppServiceService) { }

  ngOnInit(): void {

    this.ProviderSer.getProviders().subscribe(data =>(this.Provider = data),
    error => (this.errorMsg = error),
    () => console.log("the sequence completed")
    );
  }

}
