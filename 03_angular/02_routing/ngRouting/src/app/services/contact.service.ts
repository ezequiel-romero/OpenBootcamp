import { Injectable } from '@angular/core';
import { CONTACT_LIST } from '../mock/contacts.mock';
import { IContact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList: IContact[] = CONTACT_LIST

  constructor() { }

  getContacts(genderFilter?:string): Promise<IContact[]> {
    
    if(genderFilter=='w' || genderFilter=='m'){
      let filteredContactList: IContact[] = this.contactList.filter((contact) => contact.gender == genderFilter)
      return Promise.resolve(filteredContactList)
    } else if(genderFilter=='all') {
      return Promise.resolve(this.contactList)
    } else {
      return Promise.reject(`Filter not valid`)
    }
    
  }

}
