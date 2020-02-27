import { Component, OnInit } from '@angular/core';
import { Provider } from'../provider';
import { ShipmentAppServiceService } from'../shipment-app-service.service';
import { ProviderService } from '../provider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  
public provider: Provider;
public errorMsg;

  constructor(private route: ActivatedRoute, private ProviderSer: ProviderService, private router: Router) { }

getProviderDetails(id:string){

  this.ProviderSer.getProviderById(id).subscribe(data =>(this.provider = data),
  error => (this.errorMsg = error),
  () => console.log("the sequence completed")
  );
}

deleteProvider(id: any) {
  if (confirm("Are you sure you want to delete this Provider?")){
    this.ProviderSer.deleteProviderById(id)
    .subscribe(res => {
        this.router.navigate(['/LogIn']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}

  ngOnInit() {

    this.getProviderDetails("2");
  }




}
