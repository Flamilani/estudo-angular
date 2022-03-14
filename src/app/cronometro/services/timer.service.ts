import { HttpClient, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Timer } from '../model/timer';
import { map } from 'rxjs/operators';

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private http: HttpClient) { }

  timeList: Timer[] = [];

  responseStatus!: number;

  add(time: Timer) {
    this.timeList.push(time);
  }

  list(): Observable<any>{
    return this.http.get(`${urlBase}/comments`, {responseType: 'text', observe: 'response'});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
