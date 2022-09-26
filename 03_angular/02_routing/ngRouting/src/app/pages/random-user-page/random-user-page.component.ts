import { Component, OnInit } from '@angular/core';
import { IRandomUser, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user-page',
  templateUrl: './random-user-page.component.html',
  styleUrls: ['./random-user-page.component.scss']
})
export class RandomUserPageComponent implements OnInit {
  
  user: IRandomUser | undefined

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.randomUserService.getRandomUser().subscribe((response: Results) => {
      this.user = response.results[0] // Send it to randomUser  
    })
  }

  getNewUser(){
    // Deprecated
    // this.randomUserService.getRandomUser().subscribe(
    //   (response: Results) => {
    //     this.user = response.results[0] // Send it to randomUser
    //   },
    //   (error) => console.error(`${error}`)
    // )

    this.randomUserService.getRandomUser().subscribe(
      {
        next: (response: Results) => {
          this.user = response.results[0] // Send it to randomUser
        },
        error: (error) => console.error(`${error}`),
        complete: () => console.info(`Random user petition ended`)
      }
    )
  }

  getUserList(n: number) {
    this.randomUserService.getRandomUsers(n).subscribe(
      {
        next: (response: Results[]) => {
          console.log(response)
        },
        error: (error) => console.error(`${error}`),
        complete: () => console.info(`Random user petition ended`)
      }
    )
  }

}
