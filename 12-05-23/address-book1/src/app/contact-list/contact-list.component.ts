import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Contact } from '../models/contact.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  @Input() contacts: Contact[] = [];

  backgroundForFirstContact: string = "yellow"

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


  changeBackgroundForAll() {

  }
}
