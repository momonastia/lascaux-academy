import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable ({
  providedIn: "root"
})

export class ProductService {
  constructor (private http: HttpClient) {

  }
  configUrl = 'https://fakestoreapi.com/products';
  getAll(){

    return this.http.get(this.configUrl);

  }
}


