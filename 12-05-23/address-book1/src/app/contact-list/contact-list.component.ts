import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Contact } from '../models/contact.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent /* implements OnChanges */ {
  /* ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  } */

  @Input() contacts: Contact[] = [];

  @Output() selectedContactEvent: EventEmitter<Contact> = new EventEmitter<Contact>();

  backgroundForFirstContact: string = "yellow"

  background: string = "white"

  changeBackground() {
    if(this.backgroundForFirstContact === "yellow"){
      this.backgroundForFirstContact = "red";

    }else{
      this.backgroundForFirstContact = "yellow"
    }
  }

  isCalledEleonora(firstName: string){
    return firstName.toLocaleLowerCase()==="eleonora"
  }


  changeBackgroundToAllElements() {
    if (this.background === "white") {
       this.background = "lightgrey"
    }else {
      this.background = "white"
    }
  }

  showDetails(contact: Contact){
    console.log(contact)
    this.selectedContactEvent.emit(contact)
  }

}
