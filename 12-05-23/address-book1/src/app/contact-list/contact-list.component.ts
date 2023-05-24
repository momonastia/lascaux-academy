import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../models/contact.module';
import { Subscription } from 'rxjs';
import { ContactsService } from '../services/contacts.service';
import { ProductService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  /* @Input() contacts: Contact[] = []; */

  contacts: Contact[] = [];
  contactsSubscription: Subscription = new Subscription();

  /* @Output() selectedContactEvent: EventEmitter<Contact> = new EventEmitter<Contact>(); */

  background: string = "white"

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private productService: ProductService) {}

  ngOnInit(): void {
    console.log("OnInit è implementato");
    console.log("Procedo a recuperrare i contatti da json");

    this.contactsSubscription = this.contactsService
    .getContactsFromJson()
    .subscribe({
      next: (contactsFromService: Contact[]) => (this.contacts = [...contactsFromService]),
    });

   /*  this.loading = true
    this.productService.getAll().subscribe({next: products => {
      this.products = products;
      this.loading = false;
    }}) */
  }

  changeBackgroundToAllElements() {
    if (this.background === "white") {
       this.background = "lightgrey"
    }else {
      this.background = "white"
    }
  }

  showDetails(contactId: number){
    console.log(`L'ID del contatto selezionato è ${contactId}`);
    this.router.navigate([contactId], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy(): void {
    console.log("OnDestroy è implementato");
    this.contactsSubscription.unsubscribe();
  }

}
