import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, delay, map } from 'rxjs';
import { Contact, ContactDetails } from '../models/contact.module';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts$ = new BehaviorSubject<Contact[]>([])

  constructor(private httpClient: HttpClient) {
    this.contacts$.subscribe(console.log)
  }

  /* metodo per simulare il recopero dati da back end */

  public getContactsFromJson(inputSearch?: string): Observable<Contact[]> {
    return this.httpClient
    .get<Contact[]>('contacts.json')
    .pipe(delay(5000),
      map((contacts: Contact[]) => {

        return contacts.filter((contact)=>contact.firstName.toLowerCase().includes(inputSearch!.toLowerCase()))
    })
    )
  }

  public getSingleContactsFromJson(id: number): Observable<ContactDetails> {
    return this.httpClient.get<ContactDetails>('contacts/' + id + '.json')
  }

  saveNewContact(contact: ContactDetails): void {
    let currentContacts = this.contacts$.value;/// salva nella variabile currentContacts l'ultimo valore messo nel Observable
    currentContacts.push(contact);
    this.contacts$.next(currentContacts);
  }

  getContacts(inputSearch?: string): Observable<Contact[]>{
    return this.contacts$.asObservable().pipe(
      delay(500),
      map((contacts: Contact[]) => {
        if(inputSearch){
          return contacts.filter(c => c.firstName.toLowerCase().includes(inputSearch.toLowerCase()))
        }
        else {
          return contacts
        }
      }
      )
    )
  }

}
