import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosComunes, DatosComunesResponse } from '../layout/interfaces/datos-comunes.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosComunesService {

  constructor() { }

  // region servicios y otras dependencias

  private http = inject(HttpClient);

  // region variables

  readonly API_URL = environment.API_URL;

  // region metodos

  getAll(): Observable<DatosComunesResponse> {
    const url = `${this.API_URL}/per-datos-comunes`;
    return this.http.get<DatosComunesResponse>(url);
  }

  // normalmente es el mismo id que el de los datos personales
  get(id: number): Observable<DatosComunes> {
    const url = `${this.API_URL}/per-datos-comunes/${id}`;
    return this.http.get<DatosComunes>(url);
  }

  paginated(urlParams: string): Observable<DatosComunesResponse> {
    const url = `${this.API_URL}/per-datos-comunes?${urlParams}`;
    return this.http.get<DatosComunesResponse>(url);
  }

  create(data: DatosComunes): Observable<DatosComunes> {
    const url = `${this.API_URL}/per-datos-comunes`;
    return this.http.post<DatosComunes>(url, data);
  }

  edit(id: number, data: DatosComunes): Observable<DatosComunes> {
    const url = `${this.API_URL}/per-datos-comunes/${id}`;
    return this.http.put<DatosComunes>(url, data);
  }

  delete(id: number): Observable<void> {
    const url = `${this.API_URL}/per-datos-comunes/${id}`;
    return this.http.delete<void>(url);
  }
}
