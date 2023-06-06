import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, delay, catchError, throwError, retry } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable ({
  providedIn: "root"
})

export class ProductService {
  constructor (
    private http: HttpClient,
    private errorService: ErrorService
    ){
  }
  configUrl = 'https://fakestoreapi.com/products';
  getAll(): Observable<IProduct[]>{

    return this.http.get<IProduct[]>(this.configUrl)
    .pipe(delay(2000),
    retry(2),
    catchError(this.errorHandler.bind(this)))
  }

    private errorHandler(error: HttpErrorResponse) {
      this.errorService.handle(error.message)
      return throwError(() => error.message)
    }

    createProduct(product: IProduct): Observable<IProduct> {
      return this.http.post<IProduct>(this.configUrl, product)
    }
}


