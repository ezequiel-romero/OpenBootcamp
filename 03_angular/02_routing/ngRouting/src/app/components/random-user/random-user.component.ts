import { Component, Input, OnInit } from '@angular/core';
import { IRandomUser } from 'src/app/models/randomuser';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  @Input() randomUser: IRandomUser | undefined

  constructor() { }

  ngOnInit(): void {
  }

}