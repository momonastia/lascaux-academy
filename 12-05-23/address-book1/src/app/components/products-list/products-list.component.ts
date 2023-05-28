import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/products.service';
import { Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  /* products: IProduct[] = []; */
  productsSubscription: Subscription = new Subscription();
  loading = false
  products$: Observable<IProduct[]>

  constructor(
    private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productService.getAll().pipe(
      tap(() => this.loading = false)
    );
    /* this.productsSubscription = this.productService
    .getAll()
    .subscribe({next: products => {
      this.products = products;
      this.loading = false;
      console.log(this.products)
    }}) */
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
