import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, delay, map } from 'rxjs';
import { Contact, ContactDetails } from '../models/contact.module';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  /* metodo per simulare il recopero dati da back end */

  public getContactsFromJson(inputSearch?: string): Observable<Contact[]> {
    return this.httpClient
    .get<Contact[]>('assets/json/contacts.json')
    .pipe(delay(5000),
      map((contacts: Contact[]) => {

        return contacts.filter((contact)=>contact.firstName.toLowerCase().includes(inputSearch!.toLowerCase()))
    })
    )
  }

  public getSingleContactsFromJson(id: number): Observable<ContactDetails> {
    return this.httpClient.get<ContactDetails>('assets/json/contacts/' + id + '.json')
  }
}
