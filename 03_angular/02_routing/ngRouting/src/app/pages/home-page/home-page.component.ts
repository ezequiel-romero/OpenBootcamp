import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IRandomUser } from 'src/app/models/randomuser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  selectedContact: IRandomUser | undefined
  token: string | null = null

  constructor(private router: Router) { }

  ngOnInit(): void {

    //Check if user is logged in
    if(sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token')
    }

    //Catch STATE from navigation
    if(history.state.data) {
      this.selectedContact = history.state.data
    }

  }

  navigateToContacts(): void {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        genderFilter: 'all'
      }
    }

    this.router.navigate(['contacts'], navigationExtras)
  }

  navigateToRandomUser(): void {
    this.router.navigate(['random-user'])
  }

}
