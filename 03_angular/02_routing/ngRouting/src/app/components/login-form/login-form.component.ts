import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Reactive Forms Module imports
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({})
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>()

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })

  }

  // Getters/Setters to catch the info from the DOM
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  // Login Form Submit
  submitLogin(){
    if(this.loginForm.valid){
      // console.table(this.loginForm.value);
      this.loginAction.emit(this.loginForm.value)
      // this.loginForm.reset()
    }
  }

}
