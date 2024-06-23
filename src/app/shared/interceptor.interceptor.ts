import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthServiceService} from "./services/auth-service.service";

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private  auth :AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers
        .append('Content-Type', 'application/json')
    });
    if (this.auth.userClaim.token) {
      request = request.clone({
        headers: request.headers
          .append('Token',  `${this.auth.userClaim.token}`)
      });
    }
    return next.handle(request);
  }
}
