import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.usuarioService.verificarCaducudadToken();

    const token: string | null = localStorage.getItem('token');
    const headers: HttpHeaders | undefined = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('authorization', `Bearer ${token}`);

    let request = req;

    if (token) {
      request = req.clone({
        headers,
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/auth/login');
        }

        return throwError(err);
      })
    );
  }
}
