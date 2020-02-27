import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';  
import { Provider } from './provider';  

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  url = 'https://localhost:44320/Api/Providers';  

  constructor(private http: HttpClient) { }  

  getAllProviders(): Observable<Provider[]> {  
    return this.http.get<Provider[]>(this.url + '/AllProviders');  
  } 

  getProviderById(userId: string): Observable<Provider> {  
    return this.http.get<Provider>(this.url + '/GetProviderDetails/' + userId);  
  }  

  getProviderByProviderId(providerId: string): Observable<Provider> {  
    return this.http.get<Provider>(this.url + '/GetProviderById/' + providerId);  
  }  

  createProvider(provider: Provider): Observable<Provider> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Provider>(this.url + '/InsertEmployeeDetails/',  
    provider, httpOptions);  
  }  

  updateProvider(provider: Provider): Observable<Provider> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Provider>(this.url + '/UpdateProvider', provider, httpOptions);  
  }  

  deleteProviderById(providerid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteProvider?id='+providerid, httpOptions);  
  }  

}  