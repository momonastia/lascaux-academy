import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  productsSubscription: Subscription = new Subscription();
  loading = false

  constructor(
    private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsSubscription = this.productService
    .getAll()
    .subscribe({next: products => {
      this.products = products;
      this.loading = false;
      console.log(this.products)
    }})
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
