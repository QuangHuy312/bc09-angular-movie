import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'https://movie0706.cybersoft.edu.vn/api';
  constructor(private _http: HttpClient) {}

  get<T>(url: string, options = {}): Observable<T> {
    return this._http
      .get<T>(`${this.BASE_URL}/${url}`, options)
      .pipe(catchError(this.handleError));
  }

  post<T>(url: string, body: any, options = {}): Observable<T> {
    return this._http
      .post<T>(`${this.BASE_URL}/${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  put<T>(url: string, body: any, options = {}): Observable<T> {
    return this._http
      .put<T>(`${this.BASE_URL}/${url}`, body, options)
      .pipe(catchError(this.handleError));
  }

  delete<T>(url: string, options = {}): Observable<T> {
    return this._http
      .post<T>(`${this.BASE_URL}/${url}`, options)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    switch (error.status) {
      // nơi xử lý các common error
      case 400:
      // console.log(massage);
      case 404:
        // cosole.log(message)
        break;
      default:
        break;
    }
    return throwError(error);
  }
}
