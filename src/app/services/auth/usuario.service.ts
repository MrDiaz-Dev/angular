import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginForm } from 'src/app/interfaces/login/login-form.interface';
import {
  LoginRespJson,
  Usuario,
  UsuarioPaginados,
} from 'src/app/interfaces/login/login-respuesta.interface';
import { BehaviorSubject } from 'rxjs';
import { EnvConfigService } from '../utils/env-config.service';
// import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private API_URL = environment.API_URL;
  usuario?: Usuario;
  ejecutarRefresh: boolean = true;

  intervalID: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private envConfigService: EnvConfigService
  ) {
    envConfigService.initializeEnv();
    this.API_URL = envConfigService.apiUrl;
  }

  canDoSomething(): boolean {
    this.API_URL = this.envConfigService.apiUrl;
    return this.API_URL ? true : false;
  }

  refreshToken(): Observable<boolean> | null {
    if (!this.API_URL) return null;
    const token = localStorage.getItem('token') || '';
    const url = this.API_URL + `/token/refresh`;

    // console.warn('INTENTANDO REFRESCAR TOKEN');

    // private readonly user$ = new BehaviorSubject<any>({});
    // selectedUser$ = this.user$.asObservable();

    const refresh = {
      data: {
        token: token,
      },
    };
    return this.http.post(url, refresh).pipe(
      tap((resp: any) => {
        console.log('REFRESH TOKEN =>', resp);
        this.SaveStorage(resp.data);
      }),
      map((resp) => true)
      // catchError(err => of(false))
    );
  }

  SaveStorage(json: LoginRespJson) {
    console.log('Save STORAGE =>', json);
    // console.log('JSON => ', json);
    const tokenData = JSON.parse(atob(json.token!.split('.')[1]));
    // console.log('USUARIO => ', json.data);

    let oldToken = localStorage.getItem('token');
    
    localStorage.setItem('token', json.token);
    
    localStorage.setItem('usuario', JSON.stringify(json.data));
  }

  // setUserData() {
  //   this.product$.next(product);
  // }

  removeStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('urldebusqueda');
  }

  login(formdata: LoginForm) {
    if (!this.API_URL) return null;
    // console.log('log-data =>', formdata);
    // console.log(formdata);
    // localStorage.setItem('username', formdata)
    const url = this.API_URL + `/token/login`;
    return this.http.post(url, formdata).pipe(
      tap((resp: any) => {
        // console.log('RESPUESTA =>', resp);
        this.SaveStorage(resp.data);
      })
    );
  }

  logout(): void {
    this.removeStorage();
    this.router.navigateByUrl('/auth/login');
  }

  verificarCaducudadToken(): void {
    let token = localStorage.getItem('token')!;

    if (token) {
      let payload = JSON.parse(atob(token!.split('.')[1]));

      let expirado = this.expirado(payload.exp);

      if (expirado) {
        console.log('LOGIN EXPIRADO');
        this.logout();
        return;
      }

      // Asegurarse de limpiar un intervalo existente antes de crear uno nuevo
      if (this.intervalID !== null) {
        clearInterval(this.intervalID);
        this.intervalID = null;
      }

      this.intervalID = setInterval(() => {
        if (this.canDoSomething()) {
          this.verificaRenueva(payload.exp);
          clearInterval(this.intervalID);
          this.intervalID = null;
          return;
        }
      }, 1000);
    }
  }

  verificaRenueva(fechaExp: number) {
    let tokenExp = new Date(fechaExp * 1000);
    let ahora = new Date();

    // ahora en 30 minutos en el futuro
    ahora.setTime(ahora.getTime() + 30 * 60 * 1000);

    // console.log('Hora del Token', tokenExp);
    // console.log('Hora actual', ahora);

    if (this.ejecutarRefresh) {
      // esto verifica si el token expirara en menos de 30 minutos
      if (tokenExp.getTime() < ahora.getTime()) {
        this.ejecutarRefresh = false;

        this.refreshToken().subscribe(
          (respuesta) => {
            this.ejecutarRefresh = true;
          },
          (err) => {
            this.ejecutarRefresh = true;
            // console.log(err);
            // Swal.fire({
            //   position: 'top-end',
            //   icon: 'error',
            //   title: 'Refresh Token',
            //   html: 'Tenemos problemas al refrescar el token.',
            //   showConfirmButton: false,
            //   timer: 4000
            // })
          }
        );
      }
    }
  }

  expirado(fechaExp: number) {
    // getTime nos llega en milisegundos por eso lo dividimos entre 1000
    let ahora = new Date().getTime() / 1000;
    // console.log(ahora);
    // ahora = ahora + 3730;
    // console.log('ahora = ', ahora);
    // console.log('fechaExp = ', fechaExp);
    // console.log('fechaExp - ahora = ', fechaExp - ahora);
    // console.log('fechaExp < ahora = ',fechaExp < ahora);
    if (fechaExp < ahora) {
      // console.log('true');
      return true;
    } else {
      // console.log('false');
      return false;
    }
  }

  // changePassword(formdata: LoginForm) {
  //   console.log(formdata);
  //   const url = this.API_URL + `/users/change-password`;
  //   return this.http.post(url, formdata);
  // }

  // getUsuarios(): Observable<Usuario[]> {
  //   const url = this.API_URL + '/usuarios';
  //   return this.http.get<Usuario[]>(url);
  // }

  // getUsuariosPaginados(): Observable<UsuarioPaginados> {
  //   const url = this.API_URL + '/usuarios_paginate';
  //   return this.http.get<UsuarioPaginados>(url);
  // }

  // getImagenUsuario(): Observable<any> {
  //   const url =
  //     this.API_URL +
  //     `/usuario/imagen/${JSON.parse(localStorage.getItem('usuario')).id}`;
  //   return this.http.get<any>(url);
  // }
}
