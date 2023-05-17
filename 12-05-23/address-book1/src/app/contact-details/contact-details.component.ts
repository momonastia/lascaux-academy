import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Contact } from '../models/contact.module';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  @Output() backToContactListEvent : EventEmitter<void> = new EventEmitter<void>();

  backToContactList(){
    this.backToContactListEvent.emit();
  }

}
