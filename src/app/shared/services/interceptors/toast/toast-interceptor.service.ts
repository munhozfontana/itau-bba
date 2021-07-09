import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToastInterceptorService implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          this._snackBar.open(
            `Erro ao usar o recurso - Erro: ${error.message}`,
            undefined,
            {
              duration: 5 * 1000,
            } as MatSnackBarConfig
          );
        }
        return throwError(error);
      })
    );
  }
}
