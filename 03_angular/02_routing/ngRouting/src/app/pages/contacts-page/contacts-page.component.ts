import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
/* import { IContact } from 'src/app/models/contact.interface'; */
import { IRandomUser, Results } from 'src/app/models/randomuser';
/* import { ContactService } from 'src/app/services/contact.service'; */
import { RandomUserService } from 'src/app/services/random-user.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  genderFilter: string = 'all'
  loading: boolean = true
  randomUserList: IRandomUser[] = []
  THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    /*private contactService: ContactService,*/
    private randomUserService: RandomUserService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(this.THUMBUP_ICON));
  }

  ngOnInit(): void {

    //Get queryParams
    this.route.queryParams.subscribe((params: any) => {
      
      this.genderFilter = params.genderFilter
      
      // Get random user list from random user services
      this.randomUserService.getRandomUsers(10, this.genderFilter).subscribe(
        {
          next: (response: Results) => {
            response.results.forEach((randomUser: IRandomUser) => {
              this.randomUserList.push(randomUser)
            })
          },
          error: (error) => console.error(`${error}`),
          complete: () => {
            console.info(`Random user petition ended`)
            this.loading = false
          }
        }
      )
      
    })

  }

  //Send info between components through STATE
  backToHome(user: IRandomUser){

    let navigationExtras: NavigationExtras = {
      state: {
        data: user
      }
    }

    this.router.navigate(['/dashboard'], navigationExtras)
  }

}
