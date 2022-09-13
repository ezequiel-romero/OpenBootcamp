import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined
  contact: IContact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: ''
  }

  previousFilter: string = 'all'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Read parameter from URL
    this.route.params.subscribe(
      (params: any) => {
        if(params.id){
          this.id = params.id
        }
      }
    )


    // Read contact parameter from URL
    if(history.state.data) {
      this.contact = history.state.data
    }

    if(history.state.filter) {
      this.previousFilter = history.state.filter
    }
    
  }

}
