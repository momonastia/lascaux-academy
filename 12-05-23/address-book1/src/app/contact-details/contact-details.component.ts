import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.module';
import { UtilitiesService } from '../services/utilities.service';
import * as moment from 'moment';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit  {

  @Input('selectedContactForDetails') selectedContact: Contact | null | undefined;

  @Output() backToContactListEvent : EventEmitter<void> = new EventEmitter<void>();

  backToContactList(){
    this.backToContactListEvent.emit();
  }

  convertedFisrstName: string;
  convertedLastName: string;
  convertedDate: string;

  constructor(private utilitiesService: UtilitiesService) {}

  ngOnInit() {
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

}
