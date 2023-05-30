import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent {

  /* passing "term" to parent component product-list for search-bar */

 @Output() termChange: EventEmitter<string> = new EventEmitter<string>();

 term = "";

 onTermChange() {
   this.termChange.emit(this.term);
 }
}
