import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { Contact } from './models/contact.module';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'address-book';

  contacts: Contact[] = [
    {
      firstName: "Giacomo",
      lastName: "Piantini",
      phoneNumber: "57824352364",
      phonePrefix: "+39",
      email: "giacomopiantini@gmail.com"
    },
    {
      firstName: "Eleonora",
      lastName: "Castro",
      phoneNumber: "3456345",
      phonePrefix: "+39",
      email: "eleonoracastro@gmail.com"
    },
    {
      firstName: "Laura",
      lastName: "Saporoso",
      phoneNumber: "4734657",
      phonePrefix: "+39",
      email: "laurasaporoso@gmail.com"
    }
  ];

selectedContact: Contact | null | undefined;

onSelectedContact($event: Contact){
  this.selectedContact = $event;
}

/* Product part */

  /* products: IProduct[] = data; */
  products: IProduct[] = [];

  constructor(private ProductService: ProductService){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.ProductService
  }
}
