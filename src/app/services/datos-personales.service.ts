import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales, DatosPersonalesResponse } from '../layout/interfaces/datos-personales.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor() { }

  // region servicios y otras dependencias

  private http = inject(HttpClient);

  // region variables

  readonly API_URL = environment.API_URL;

  // region metodos

  getAll(): Observable<DatosPersonalesResponse> {
    const url = `${this.API_URL}/datos-personales`;
    return this.http.get<DatosPersonalesResponse>(url);
  }

  get(id: number): Observable<DatosPersonales> {
    const url = `${this.API_URL}/datos-personales/${id}`;
    return this.http.get<DatosPersonales>(url);
  }

  paginated(urlParams: string): Observable<DatosPersonalesResponse> {
    const url = `${this.API_URL}/datos-personales?${urlParams}`;
    return this.http.get<DatosPersonalesResponse>(url);
  }

  create(datosPersonales: DatosPersonales): Observable<DatosPersonales> {
    const url = `${this.API_URL}/datos-personales`;
    return this.http.post<DatosPersonales>(url, datosPersonales);
  }

  edit(id: number, datosPersonales: DatosPersonales): Observable<DatosPersonales> {
    const url = `${this.API_URL}/datos-personales/${id}`;
    return this.http.put<DatosPersonales>(url, datosPersonales);
  }

  delete(id: number): Observable<void> {
    const url = `${this.API_URL}/datos-personales/${id}`;
    return this.http.delete<void>(url);
  }
}
