import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent } from'./log-in/log-in.component';
import { ProviderComponent } from './provider/provider.component'
import {ContactComponent} from'./contact/contact.component';
import {ProvidereditComponent} from './provideredit/provideredit.component';

const routes: Routes = [
  { path: '', redirectTo: '/LogIn', pathMatch: 'full' },
  { path: 'LogIn', component:  LogInComponent},
  { path: 'Provider', component:  ProviderComponent},
  { path: 'Contact', component:  ContactComponent},
  { path: 'EditProvider/:id', component:  ProvidereditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
