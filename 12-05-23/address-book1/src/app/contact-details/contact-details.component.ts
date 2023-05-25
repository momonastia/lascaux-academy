import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactDetails } from '../models/contact.module';
import { UtilitiesService } from '../services/utilities.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Subscription, concatMap } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  /* @Input('selectedContactForDetails')  */selectedContact!: ContactDetails;

  /* @Output() backToContactListEvent : EventEmitter<void> = new EventEmitter<void>(); */

  currentId!: number;
  retrieveCurrentId: Subscription = new Subscription();
  contactsSubscription: Subscription = new Subscription();

  closeDetail(){

  }

  convertedFisrstName: string;
  convertedLastName: string;
  convertedDate: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private utilitiesService: UtilitiesService) {
      /* this.retrieveCurrentId = this.activatedRoute.params.subscribe({
        next: (params: Params) => {
          this.currentId = params['id'];
          this.contactsService.getSingleContactsFromJson(this.currentId).subscribe({
            next: (contactDetails) => {
             this.selectedContact = contactDetails;
            }
          })
        },
      }); */
      this.retrieveCurrentId = this.activatedRoute.params.pipe(
        concatMap((params: Params) => {
          this.currentId = params['id'];
          return this.contactsService.getSingleContactsFromJson(this.currentId)
        })
        ).subscribe({
          next: (contactDetails: ContactDetails) => {
            this.selectedContact = contactDetails;
          }
        })

    }

  ngOnInit() {
    console.log("Attualmente current ID" + this.currentId);
    /* this.contactsSubscription = this.contactsService
    .getContactsFromJson()
    .subscribe({
      next: (contacts: Contact[]) => {
        this.selectedContact = {
          ...contacts.find(
            (contact: Contact) => contact.id == this.currentId
          )!,
        };
      },
    }); */
    this.convertText();
    this.convertBirthDate()
  }

  convertText(){
    if (this.selectedContact) {
      this.convertedFisrstName = this.utilitiesService.toTitleCaseFunction(this.selectedContact.firstName);
      this.convertedLastName = this.utilitiesService.toTitleCaseFunction(this.selectedContact.lastName);
    }
  }

  convertBirthDate() {
    if (this.selectedContact) {
      this.convertedDate = this.utilitiesService.dateFormatFunction(this.selectedContact.birthDate);
    }
  }

  ngOnDestroy(): void {
    this.retrieveCurrentId.unsubscribe();
    this.contactsSubscription.unsubscribe();
  }

}
