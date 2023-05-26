import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}


  /* interceptor pensato per aggiugere ad ogni request HTTP un header contenente un token di autentificazione */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
    /* un clone della richiesta originale */
    /* nella nuova richiesta si va ad aggiungere N nuovi Headers a seconda delle esigenza */

      const requestCopy = request.clone({
      headers: request.headers.set("Example-Token", "CiaoSonoIo")
    });

    /* si va a sostituire la richiesta antecedente con quella nuova */
    return next.handle(requestCopy);
  }
}
