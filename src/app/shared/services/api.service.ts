import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://be.cr/api/v1/public/';

  constructor(private http: HttpClient) {
  }

  getMethod(method: string) {
    return this.http.get(this.url + method).pipe(
      catchError((err: HttpErrorResponse | any, _) => {
        let error = '';
        if (err.error instanceof Error) {
          error = err.error.message;
        } else {
          error = err.error.msg;
        }
        return throwError(error)
      }))
  }

  postMethod(method: string, params?: any) {
    return this.http.post<any>(this.url + method, params).pipe(
      catchError((err: HttpErrorResponse | any, _) => {
        console.log(err)
        let error = '';
        if (err.error instanceof Error) {
          console.log(1);
          error = err.error.message;
        } else {
          console.log(err.error.msg);
          error = err.error.msg;
        }
        return throwError(error)
      })
    )
  }
}

