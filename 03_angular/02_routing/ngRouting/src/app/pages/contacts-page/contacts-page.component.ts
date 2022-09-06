import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  contactList: IContact[] = [
    {
      id: 0,
      firstName: 'Martin',
      lastName: 'Villegas',
      email: 'martin@gmail.com'

    },
    {
      id: 1,
      firstName: 'Federico',
      lastName: 'Gomez',
      email: 'federico@gmail.com'

    },
    {
      id: 2,
      firstName: 'Laura',
      lastName: 'Garcia',
      email: 'laura@gmail.com'

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
