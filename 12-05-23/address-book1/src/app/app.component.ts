import { Component } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products';
import { Contact } from './models/contact.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';

  contacts: Contact[] = [
    {
      firstName: "Giacomo",
      lastName: "Piantini",
      phoneNumber: "57824352364",
      phonePrefix: "+39"
    },
    {
      firstName: "Eleonora",
      lastName: "Castro",
      phoneNumber: "3456345",
      phonePrefix: "+39"},
    {
      firstName: "Laura",
      lastName: "Saporoso",
      phoneNumber: "4734657",
      phonePrefix: "+39"
    }
  ];
  products: IProduct[] = data;
}
