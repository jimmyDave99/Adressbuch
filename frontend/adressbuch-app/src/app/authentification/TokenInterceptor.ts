// Angular-Interceptor, um das JWT-Token zu jedem HTTP-Request hinzuzufügen
// Der Interceptor ruft das Token von der AuthService-Klasse ab und fügt es als Authorization-Header im Bearer-Format zum Request hinzu.
import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "./AuthService";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Umleitung zur Anmeldeseite
          window.location.href = '';
        }
        return throwError(error);
      })
    );
  }
}
