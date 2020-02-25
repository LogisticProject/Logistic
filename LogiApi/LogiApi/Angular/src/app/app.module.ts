import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProviderComponent } from './provider/provider.component';
import { ShipmentAppPipePipe } from './shipment-app-pipe.pipe';
import { ShipmentAppdirectiveDirective } from './shipment-appdirective.directive';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ProviderComponent,
    ShipmentAppPipePipe,
    ShipmentAppdirectiveDirective,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
