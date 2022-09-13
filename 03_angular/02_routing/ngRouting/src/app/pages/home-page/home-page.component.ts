import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  selectedContact: IContact | undefined
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
        gender: 'all'
      }
    }

    this.router.navigate(['contacts'], navigationExtras)
  }

}
