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

  create(data: DatosPersonales): Observable<DatosPersonales> {
    const url = `${this.API_URL}/datos-personales`;
    return this.http.post<DatosPersonales>(url, data);
  }

  edit(id: number, data: DatosPersonales): Observable<DatosPersonales> {
    const url = `${this.API_URL}/datos-personales/${id}`;
    return this.http.put<DatosPersonales>(url, data);
  }

  delete(id: number): Observable<void> {
    const url = `${this.API_URL}/datos-personales/${id}`;
    return this.http.delete<void>(url);
  }

  // --------------------------------------------------------------------------

  getBajaMedicaActual(id: number | string): Observable<any> {
    const url = this.API_URL + `/datos-personales/baja-medica/${id}`;
    return this.http.get<any>(url);
  }
}
