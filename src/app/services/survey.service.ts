import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Survey } from '../survey';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  private getSurveyUrl: string = 'http://34.75.16.16/SWE-645-HW3-final/rest/students';
  private addSurveyUrl: string = 'http://34.75.16.16/SWE-645-HW3-final/rest/students/create';
  
  getSurveys(): Observable<Survey[]> {

    return this.http.get<Survey[]>(this.getSurveyUrl)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }

  addStudent(student: Student): Observable<Student> {
    
    return this.http.post<Student>(this.addSurveyUrl, JSON.stringify(student), 
                                    {headers: {'Content-Type': 'application/json'} })
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
