import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, delay, catchError, throwError } from "rxjs";
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
  configUrl = 'https://fakestoreapi.com/producs';
  getAll(): Observable<IProduct[]>{

    return this.http.get<IProduct[]>(this.configUrl).pipe(delay(2000),
    catchError(this.errorHandler.bind(this)))
  }

    private errorHandler(error: HttpErrorResponse) {
      this.errorService.handle(error.message)
      return throwError(() => error.message)
    }
}


