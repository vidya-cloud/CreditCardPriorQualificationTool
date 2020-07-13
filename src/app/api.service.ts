import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "http://localhost:51836/api/EligibilityChecker/";

  constructor(private httpClient: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  public getCardTypeEligibleforCustomer(firstname: any , lastname: any, dob: any, annualIncome: any) {
    return this.httpClient.get(this.SERVER_URL + firstname + "/" + lastname + "/" + dob + "/" + annualIncome)
    .pipe(catchError(this.errorHandler));
  }
}
