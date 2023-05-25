import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../models/contact.module';
import { Observable, Subscription, debounceTime, fromEvent, map, filter, switchMap, startWith } from 'rxjs';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];
  contactsSubscription: Subscription = new Subscription();

  @ViewChild("inputFilter", {static: true}) inputFilter!: ElementRef;

  /* @Output() selectedContactEvent: EventEmitter<Contact> = new EventEmitter<Contact>(); */

  background: string = "white"

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
  ) {}

  ngOnInit(): void {
    (
      fromEvent(this.inputFilter.nativeElement, "keyup") as Observable<KeyboardEvent>)
      .pipe(
        debounceTime(1000),
        filter(
          (keyboardEvent) =>
          (keyboardEvent.target as any).value.length >= 3 ||
          (keyboardEvent.target as any).value.length === 0),
        map((keyboardEvent) => (keyboardEvent.target as any).value),
        startWith(""),
        switchMap((inputValue: string) => {
        return this.contactsService.getContactsFromJson(inputValue);
      })
        )
     .subscribe((filteredContacts) => {
        console.log(filteredContacts)
        this.contacts = (filteredContacts)
    })

  /*   this.contactsSubscription = this.contactsService
    .getContactsFromJson()
    .subscribe({
      next: (contactsFromService: Contact[]) => (this.contacts = [...contactsFromService]),
    }); */

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
