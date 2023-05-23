import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { Contact } from './models/contact.module';
/* import {products as data} from "./data/products" */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'address-book';

  selectedContact: Contact | null | undefined;

onSelectedContact($event: Contact){
  this.selectedContact = $event;
}

onBackToContactList(){
  if(this.selectedContact){
    this.selectedContact = null;
  }
}

/* Product part */

/*  products: IProduct[] = data; */
  products: IProduct[] = [];
  loading = false
}
