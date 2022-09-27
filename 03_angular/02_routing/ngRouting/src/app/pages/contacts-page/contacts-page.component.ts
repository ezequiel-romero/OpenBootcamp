import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
/* import { IContact } from 'src/app/models/contact.interface'; */
import { IRandomUser, Results } from 'src/app/models/randomuser';
/* import { ContactService } from 'src/app/services/contact.service'; */
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  genderFilter: string = 'all'
  /* contactList: IContact[] = [] */
  randomUserList: IRandomUser[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    /*private contactService: ContactService,*/
    private randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {

    //Get queryParams
    this.route.queryParams.subscribe((params: any) => {
      if(params.genderFilter) {

        this.genderFilter = params.genderFilter

        if (this.genderFilter === 'female' || this.genderFilter === 'male') {
          // Get random user list from random user services with a gender filter
          this.randomUserService.getRandomUsers(10, this.genderFilter).subscribe(
            {
            next: (response: Results) => {
              response.results.forEach((randomUser: IRandomUser) => {
                this.randomUserList.push(randomUser)
              })
              console.log(this.randomUserList)
            },
            error: (error) => console.error(`${error}`),
            complete: () => console.info(`Random user petition ended`)
            }
          )
        } else {
          // Get random user list from random user services
          this.randomUserService.getRandomUsers(10).subscribe(
            {
              next: (response: Results) => {
                response.results.forEach((randomUser: IRandomUser) => {
                  this.randomUserList.push(randomUser)
                })
                console.log(this.randomUserList)
              },
              error: (error) => console.error(`${error}`),
              complete: () => console.info(`Random user petition ended`)
            }
          )
        }

      }
      //Get contactList
      /*this.contactService.getContacts(this.genderFilter)
        .then(
          (list) => this.contactList = list
        )
        .catch((error) => console.error(`There's been an issue getting contacts ${error}`))
        .finally(() => console.info(`Contacts fetch ready`))*/

      
    })


  }

  //Send info between components through STATE
  backToHome(user: IRandomUser){

    let navigationExtras: NavigationExtras = {
      state: {
        data: user
      }
    }

    this.router.navigate(['/home'], navigationExtras)
  }

}
