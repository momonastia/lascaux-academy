import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.module';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  /* metodo per simulare il recopero dati da back end */

  public getContactsFromJson(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>('assets/json/contacts.json')
  }

}
