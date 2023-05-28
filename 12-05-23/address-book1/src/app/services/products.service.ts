import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, delay, catchError, throwError } from "rxjs";
import { IProduct } from "../models/product";

@Injectable ({
  providedIn: "root"
})

export class ProductService {
  constructor (private http: HttpClient) {

  }
  configUrl = 'https://fakestoreapi.com/products';
  getAll(): Observable<IProduct[]>{

    return this.http.get<IProduct[]>(this.configUrl).pipe(delay(2000),
    catchError(this.errorHandler))
  }

    private errorHandler(error: HttpErrorResponse) {
      return throwError(() => error.message)
    }



}


