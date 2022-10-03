import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Results } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status === 0) {
      console.error(`There's an issue: ${error.error}`)
    } else {
      console.error(`There's a problem at the backend: ${error.status}. The issue is ${error.error}`)
    }

    return throwError(() => new Error("There's somthing wrong with the random user petition"))
  }

  getRandomUser(): Observable<Results>{
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), // Retry number of petitions in case that something wrong happens
      catchError(this.handleError)
    )
  }
  
  getRandomUsers(n: number, gender?: string): Observable<Results>{

    let options: HttpParams = new HttpParams().set("results", n)

    if (gender) {
      options = options.append('gender', gender)
    }
    
    return this.http.get<Results>('https://randomuser.me/api', {params: options}).pipe(
      retry(2), // Retry number of petitions in case that something wrong happens
      catchError(this.handleError)
    )
  }
}
