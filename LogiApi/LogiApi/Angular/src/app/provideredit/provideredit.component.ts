import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Provider } from'../provider';
import { ShipmentAppServiceService } from'../shipment-app-service.service';
import { ProviderService } from '../provider.service';


@Component({
  selector: 'app-provideredit',
  templateUrl: './provideredit.component.html',
  styleUrls: ['./provideredit.component.css']
})
export class ProvidereditComponent implements OnInit {

  public provider: Provider;
  public errorMsg;
  providerForm: FormGroup;
  editable: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ProviderService, private formBuilder: FormBuilder) { }

  getProviderDetails(id:string){

    this.api.getProviderByProviderId(id).subscribe(data =>(this.provider = data),
    error => (this.errorMsg = error),
    () => console.log("the sequence completed")
    );

  }

  BindForm(){
    this.providerForm.controls['AccountNumber'].setValue(this.provider.AccountNumber);  
    this.providerForm.controls['Name'].setValue(this.provider.Name);  
     this.providerForm.controls['Address1'].setValue(this.provider.Address1);  
     this.providerForm.controls['Address2'].setValue(this.provider.Address2);  
     this.providerForm.controls['Address3'].setValue(this.provider.Address3);  
     this.providerForm.controls['Country'].setValue(this.provider.Country); 
     this.providerForm.controls['City'].setValue(this.provider.City);  
     this.providerForm.controls['State'].setValue(this.provider.State);  
     this.providerForm.controls['Zipcode'].setValue(this.provider.Zipcode);  
     this.providerForm.controls['Timezone'].setValue(this.provider.Timezone);  
     this.providerForm.controls['Phone'].setValue(this.provider.Phone);  
     this.providerForm.controls['Fax'].setValue(this.provider.Fax);  
     this.providerForm.controls['Email'].setValue(this.provider.Email);  
     this.providerForm.controls['UserID'].setValue(this.provider.UserID);  
     this.providerForm.controls['ProviderID'].setValue(this.provider.ProviderID);  
  }

  populateForm(){

    this.providerForm.controls.AccountNumber.patchValue(this.provider.AccountNumber);

  }

  resetForm() {  
    this.providerForm.reset();  
  }  

  onFormSubmit() {  
    this.api.updateProvider(this.providerForm.value).subscribe(() => {  
      this.router.navigate(['/Provider']);
    });  

  }  

  createProviderForm(){
    this.providerForm = this.formBuilder.group({
      AccountNumber : ['', Validators.required],
      ProviderID : ['', Validators.required],
      UserID : ['', Validators.required],
      Name : ['', Validators.required],
      Address1 : ['', Validators.required],
      Address2 : ['', Validators.required],
      Address3 : ['', Validators.required],
      Country : ['', Validators.required],
      City : ['', Validators.required],
      State : ['', Validators.required],
      Zipcode : ['', Validators.required],
      Timezone : ['', Validators.required],
      Phone : ['', Validators.required],
      Fax : ['', Validators.required],
      Email : ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProviderDetails(this.route.snapshot.params.id);
    this.createProviderForm();
    this.BindForm();
    this.populateForm();
    }

}
