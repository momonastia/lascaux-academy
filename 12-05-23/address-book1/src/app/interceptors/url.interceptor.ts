import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  constructor() {}

  /* intecrptop pensato per aggiungere ad ogni chiamata l url comune assets/json/ */

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
    console.log(request.url)

if (request.url.includes("contact")) {
   /* concatenazione la path comune e la richiesta in corso */
   const requestCopy = request.clone({
    url: `assets/json/${request.url}`
  });

  return next.handle(requestCopy);
}
   else return next.handle(request);
  }
}
