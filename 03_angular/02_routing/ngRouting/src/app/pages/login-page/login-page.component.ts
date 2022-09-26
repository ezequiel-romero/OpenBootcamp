import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { } 

  ngOnInit(): void {
    let token = sessionStorage.getItem('token')

    if(token) {
      this.router.navigate(['home'])
    }
  }

  loginUser(value: any){

    let {email, password} = value

    this.authService.login(email, password).subscribe(
      (response) => {
        if(response.token){
          sessionStorage.setItem('token', '12h3jrufsdyiu')
          this.router.navigate(['home'])
        }
      },
      (error) => console.error(`There was an error: ${error}`),
      () => console.log('Login call complete')
    )

  }

}
