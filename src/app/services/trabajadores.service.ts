import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trabajador, TrabajadorResponse } from '../layout/interfaces/trabajador.interface';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  constructor() { }

  // region servicios y otras dependencias

  private http = inject(HttpClient);

  // region variables

  readonly API_URL = environment.API_URL;

  // region metodos

  getAll(): Observable<TrabajadorResponse> {
    const url = `${this.API_URL}/per-trabajadores`;
    return this.http.get<TrabajadorResponse>(url);
  }

  get(id: number): Observable<Trabajador> {
    const url = `${this.API_URL}/per-trabajadores/${id}`;
    return this.http.get<Trabajador>(url);
  }

  paginated(urlParams: string): Observable<TrabajadorResponse> {
    const url = `${this.API_URL}/per-trabajadores?${urlParams}`;
    return this.http.get<TrabajadorResponse>(url);
  }

  create(data): Observable<Trabajador> {
    const url = `${this.API_URL}/per-trabajadores`;
    return this.http.post<Trabajador>(url, data);
  }

  edit(id: number, data): Observable<Trabajador> {
    const url = `${this.API_URL}/per-trabajadores/${id}`;
    return this.http.put<Trabajador>(url, data);
  }

  delete(id: number): Observable<void> {
    const url = `${this.API_URL}/per-trabajadores/${id}`;
    return this.http.delete<void>(url);
  }

  // --------------------------------------------------------------------------

  getSituacionActualByIDPersona(id: number | string): Observable<TrabajadorResponse> {
    const url = this.API_URL + `/per-trabajadores/id-persona/${id}?actual=1`;
    return this.http.get<TrabajadorResponse>(url);
  }
}
