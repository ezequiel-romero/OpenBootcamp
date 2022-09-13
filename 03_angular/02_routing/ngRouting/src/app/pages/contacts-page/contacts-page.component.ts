import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  genderFilter: string = 'all'
  contactList: IContact[] = []

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {

    //Get queryParams
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      if(params.genderFilter) {
        this.genderFilter = params.genderFilter
      }
      //Get contactList
      this.contactService.getContacts(this.genderFilter)
        .then(
          (list) => this.contactList = list
        )
        .catch((error) => console.error(`There's been an issue getting contacts ${error}`))
        .finally(() => console.info(`Contacts fetch ready`))
    })

  }

  //Send info between components through STATE
  backToHome(contact: IContact){

    let navigationExtras: NavigationExtras = {
      state: {
        data: contact
      }
    }

    this.router.navigate(['/home'], navigationExtras)
  }

}
