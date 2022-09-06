import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  token = sessionStorage.getItem('token')

  constructor (private router: Router){}
  
  ngOnInit(): void {
  }
  
  logoutUser(): void {
    sessionStorage.clear()
    this.router.navigate(['login'])
  }
}
