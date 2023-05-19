import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { Contact } from './models/contact.module';
import { ContactsService } from './services/retrieve-contacts.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'address-book';

  contacts: Contact[] = [];
  contactsSubscription: Subscription = new Subscription();
  selectedContact: Contact | null | undefined;

constructor(private ContactsService: ContactsService) {}

ngOnInit(): void {
  console.log("OnInit è implementato");
  console.log("Procedo a recuperrare i contatti da json");
  this.contactsSubscription = this.ContactsService
  .getContactsFromJson()
  .subscribe({
    next: (contactsFromService: Contact[]) => (this.contacts = [...contactsFromService]),
  });
}

onSelectedContact($event: Contact){
  this.selectedContact = $event;
}

onBackToContactList(){
  if(this.selectedContact){
    this.selectedContact = null;
  }
}

ngOnDestroy(): void {
  console.log("OnDestroy è implementato");
  this.contactsSubscription.unsubscribe();
}


/* Product part */

  /* products: IProduct[] = data; */
  products: IProduct[] = [];

}
