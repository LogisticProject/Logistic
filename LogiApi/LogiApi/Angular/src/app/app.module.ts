import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProviderComponent } from './provider/provider.component';
import { ShipmentAppPipePipe } from './shipment-app-pipe.pipe';
import { ShipmentAppdirectiveDirective } from './shipment-appdirective.directive';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ProviderService } from './provider.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProvidereditComponent } from './provideredit/provideredit.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ProviderComponent,
    ShipmentAppPipePipe,
    ShipmentAppdirectiveDirective,
    ContactComponent,
    ProvidereditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
  ],
  providers: [HttpClientModule, ProviderService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
