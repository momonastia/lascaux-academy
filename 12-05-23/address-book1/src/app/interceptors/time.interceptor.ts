import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';


@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

      const currentTime = moment();
      /* console.log(currentTime) */

      const requestCopy = request.clone({
        headers: request.headers.set("Request-time", "time here")
      })

      return next.handle(requestCopy);
  }
}
