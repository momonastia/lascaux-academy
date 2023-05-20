import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, delay } from "rxjs";
import { IProduct } from "../models/product";

@Injectable ({
  providedIn: "root"
})

export class ProductService {
  constructor (private http: HttpClient) {

  }
  configUrl = 'https://fakestoreapi.com/products';
  getAll(): Observable<IProduct[]>{

    return this.http.get<IProduct[]>(this.configUrl).pipe(delay(2000))

  }
}


