import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { LeadDescontoForm } from 'src/app/shared/models/leadDescontoForm';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private api = 'http://localhost:8080/api/leads';

  constructor(private http: HttpClient) { }

  createLead(lead: LeadDescontoForm): Observable<LeadDescontoForm> {
    return this.http.post<LeadDescontoForm>(this.api, lead).pipe(
      retry(2),
      catchError(this.handleHttpError)
    );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
