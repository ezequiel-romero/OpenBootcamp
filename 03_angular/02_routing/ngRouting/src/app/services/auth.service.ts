import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //Login user ReqRes
  login(email:string, password:string): Observable<any> {

    let body = {
      email,
      password
    }

    return this.http.post("https://reqres.in/api/login", body)
  }

}
