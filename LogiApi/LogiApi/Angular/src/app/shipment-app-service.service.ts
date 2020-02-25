import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import{ catchError } from 'rxjs/operators';
import { Observable, pipe, throwError, from } from 'rxjs';
import { Provider } from'../app/provider/Provider';
@Injectable({
  providedIn: 'root'
})
export class ShipmentAppServiceService {

  private _url: string ="https://localhost:44317/api/providers";

  constructor(private http: HttpClient, private _http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error") ;
    //return throwError(error)
  }
  getProviders(): Observable<Provider[]>{

    console.log("Work!");
    return this._http.get<Provider[]>(this._url).pipe(catchError(this.errorHandler))

  }



  }
